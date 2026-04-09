const fs = require("fs"); 
const path = require("path"); 
const csv = require("csv-parser"); 
const axios = require("axios"); 
const FormData = require("form-data"); 

const BASE_URL = "https://strapi-backend.azurewebsites.net"; 
const UPLOAD_URL = `${BASE_URL}/api/upload`; 
const POSTS_URL = `${BASE_URL}/api/posts`; 

const TOKEN = "4c0b810bda1208d575232acea0d911a02ff4b8ebf59694aff66b834754b139013a61b20dc5ffc9df870a92f30e471bdf0940aaa856de2d8469b4380b08a70c7e24d465b5bd34cab89725dc2ed0774acb7cbb241dca2b06920033b1bb3825e02ced28de71b3582abe18bfd761c4806f70f9a768d277d765c53379f07808058c2f"; // 🔥 replace this 

const linkImagesToPosts = async () => { 
    const rows = []; 
    // ✅ 1. Read CSV 
    await new Promise((resolve) => { 
        fs.createReadStream(path.join(__dirname, "post.csv")) 
        .pipe(csv()) 
        .on("data", (row) => { 
            rows.push(row); 
        }) 
        .on("end", resolve); 
    }); 
    
    console.log("✅ Total rows:", rows.length);  
    
    for (const row of rows) {
  try {
    const title = row.title?.trim();
    const imageUrl = row.featured_image?.trim();

    if (!title || !imageUrl) {
      console.log("⏭️ Skipping row (missing data)");
      continue;
    }

    console.log("\n📌 Processing:", title);

    const fileName = imageUrl.split("/").pop();

    // ✅ 1. CHECK IF IMAGE ALREADY EXISTS
    const existingRes = await axios.get(
      `${BASE_URL}/api/upload/files?filters[name][$eq]=${fileName}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    let uploadedImage;

    if (existingRes.data.length > 0) {
      console.log("♻️ Image already exists:", fileName);
      uploadedImage = existingRes.data[0];
    } else {
      console.log("⬇️ Downloading:", imageUrl);

      const imageRes = await axios.get(imageUrl, {
        responseType: "stream",
      });

      const formData = new FormData();
      formData.append("files", imageRes.data, {
        filename: fileName,
      });

      const uploadRes = await axios.post(UPLOAD_URL, formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      uploadedImage = uploadRes.data[0];
      console.log("✅ Uploaded:", uploadedImage.url);
    }

    // ✅ 2. FIND POST
    const postRes = await axios.get(
      `${POSTS_URL}?filters[title][$eq]=${encodeURIComponent(title)}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const postData = postRes.data.data[0];

    if (!postData) {
      console.log("❌ Post not found:", title);
      continue;
    }

    // ⚠️ IMPORTANT FIX HERE
    const postId = postData.id; // sometimes works
    const documentId = postData.documentId; // NEW STRAPI SYSTEM

    console.log("✅ Post found:", postId);

    // ✅ 3. UPDATE POST (TRY BOTH METHODS)
    try {
      await axios.put(
        `${POSTS_URL}/${postId}`,
        {
          data: {
            featuredImage: uploadedImage.id,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      // 🔥 fallback for documentId-based systems
      if (documentId) {
        await axios.put(
          `${POSTS_URL}/${documentId}`,
          {
            data: {
              featuredImage: uploadedImage.id,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        throw err;
      }
    }

    console.log("🎯 Image linked to post:", title);
  } catch (err) {
    console.log("❌ Error:");
    console.log(err.response?.data || err.message);
  }
}
    
    console.log("\n🚀 DONE"); }; linkImagesToPosts();