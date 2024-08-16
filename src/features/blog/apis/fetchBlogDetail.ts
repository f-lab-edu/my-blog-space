import { request } from '@/shared/apis';

type FetchBlogDetailResponse = {
  id: number;
  title: string;
  date: string;
  author: string;
};

export const fetchBlogDetail = async (keyword: string) => {
  return await request<FetchBlogDetailResponse>(`/api/blog/${keyword}`);
};
