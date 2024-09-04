import { request } from '@/shared/apis';

type FetchGalleryDetailResponse = {
  id: string;
  artist: string;
  date: string;
  slug: string;
  title: string;
};

export const fetchGalleryDetail = async (slug: string) => {
  return await request<FetchGalleryDetailResponse>(`/api/gallery/${slug}`);
};
