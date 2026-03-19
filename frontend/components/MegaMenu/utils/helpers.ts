export const transformMegaMenu = (data: any[]) => {
  return data.map((tab) => ({
    id: tab.id,
    title: tab.Title,
    slug: tab.Slug,
    order: tab.Order,
    type: tab.type,
    url: tab.url,
    menu: tab.menu?.Slug,

    sections:
      tab.sections?.map((section: any) => ({
        id: section.id,
        title: section.title,
        items:
          section.items?.map((item: any) => ({
            id: item.id,
            label: item.label,
            url: item.url,
            order: item.order,
          })) || [],
      })) || [],
  }));
};