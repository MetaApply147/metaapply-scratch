'use client';

import { useEffect, useState } from "react";
import { getServices } from "@/services/httpServices";
import CustomSlider from "@/components/common/CustomSlider";

type Props = {
  page: string;
  type?: string;
  limit?: number;
};

export default function SuccessStories({ page, type, limit }: Props) {
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const params: any = {
        "populate[content][populate]": "*",
        sort: "order:asc",
        "filters[page][$eq]": page,
      };

      if (type) {
        params["filters[type][$eq]"] = type;
      }

      if (limit) {
        params["pagination[limit]"] = limit;
      }

      const res = await getServices("/success-stories", params);

      if (res.isSuccess) {
        setStories(res.data.data || []);
      }
    };

    fetchData();
  }, [page, type, limit]);

  // ✅ MOVE YOUR EXISTING UI HERE (NO CHANGE)
  const renderItem = (item: any) => {
    const comp = item.content?.[0];
    if (!comp) return null;

    // 🎥 VIDEO CARD
    if (comp.__component === "success-story.video-story") {
      const image =
        process.env.NEXT_PUBLIC_STRAPI_URL +
        comp.thumbnail?.url;

      return (
        <div className="rounded-xl overflow-hidden bg-white shadow-md">
          <div className="relative">
            <img
              src={image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-4 shadow-lg cursor-pointer">
                ▶
              </div>
            </div>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-600">
              {item.description}
            </p>

            <h4 className="text-pink-500 font-semibold mt-3">
              {item.title}
            </h4>

            <span className="text-xs text-gray-400">
              {item.role}
            </span>
          </div>
        </div>
      );
    }

    // 💬 TESTIMONIAL CARD
    if (comp.__component === "success-story.testimonial-story") {
      return (
        <div
          className="p-6 rounded-xl shadow-sm h-full"
          style={{ backgroundColor: comp.backgroundColor }}
        >
          <div className="text-3xl mb-3 text-pink-500">“</div>

          <p className="text-sm mb-6 leading-relaxed">
            {item.description}
          </p>

          <h4 className="text-pink-600 font-semibold">
            {item.title}
          </h4>

          <span className="text-xs text-gray-700">
            {item.role}
          </span>
        </div>
      );
    }

    return null;
  };

  // ✅ ONLY CHANGE IS HERE
  return (
    <CustomSlider
      data={stories}
      renderItem={renderItem}
      slidesPerView={3}
      spaceBetween={24}
      showArrows={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
      }}
    />
  );
}