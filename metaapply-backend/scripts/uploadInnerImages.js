const axios = require("axios");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const TOKEN = "0737862a10d456de1ecec48d74c43579498ddf132da3755a917256fb1e5ff1e67de6780303fa8b32f1ab82a99d9562251df208e092627d00623dd4380096d75bf354345532d2ce367beb6a01045c143839194127447ba0d1d3451cba267dd688bf17726638eb7347e3cccb749d0b269023154f35aef5c2589f38ba4257096d34";

// Fetch uploads
const getUploads = async () => {
  const res = await axios.get(`${BASE_URL}/api/upload/files`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    params: { pagination: { pageSize: 1000 } },
  });
  return res.data;
};

// Map filename → url
const buildMap = (files) => {
  const map = {};
  files.forEach((f) => {
    map[f.name] = f.url;
  });
  return map;
};

// Replace ONLY markdown URLs
const replaceMarkdown = (content, map) => {
  return content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, url) => {
    if (!url.startsWith("http")) return match;

    const fileName = url.split("/").pop().split("?")[0];

    if (map[fileName]) {
      return `![${alt}](${map[fileName]})`;
    }

    return match;
  });
};

// Fetch posts
const getPosts = async () => {
  const res = await axios.get(`${BASE_URL}/api/posts`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    params: { pagination: { pageSize: 1000 } },
  });
  return res.data.data;
};

// Update content only
const updatePost = async (id, content) => {
  await axios.put(
    `${BASE_URL}/api/posts/${id}`,
    { data: { content } },
    { headers: { Authorization: `Bearer ${TOKEN}` } }
  );
};

const run = async () => {
  const uploads = await getUploads();
  const map = buildMap(uploads);

  const posts = await getPosts();
  console.log(posts[0]);

  for (const post of posts) {
    const id = post.id;
    const content = post.content;

    if (!content) continue;

    const updated = replaceMarkdown(content, map);

    if (content !== updated) {
      console.log("Updating post:", id);
      await updatePost(id, updated);
    }
  }

  console.log("DONE ✅");
};

run();