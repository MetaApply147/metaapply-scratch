import { getServices } from "@/services/httpServices";

export const fetchEvents = async () => {
  const response = await getServices("/events", {
    populate: ["featuredImage"],
    sort: ["eventDate:desc"],
    pagination: {
        page: 1,
        pageSize: 100,
    },
  });

  if (!response.isSuccess) {
    throw new Error(response.message || "Failed to fetch events");
  }

  return response.data?.data || [];
};
