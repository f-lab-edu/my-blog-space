import { Gallery } from '@/entities/gallery/types';
import { request } from '@/shared/apis';

type FetchGalleryListResponse = {
  contents: Gallery[];
};

export const fetchGalleryList = async (params?: { category?: string }) => {
  const searchParams = new URLSearchParams();

  if (params?.category) searchParams.append('category', params.category);

  const queryString = searchParams.toString();
  return await request<FetchGalleryListResponse>(`/api/gallery?${queryString}`);
};
