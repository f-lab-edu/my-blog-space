import { Blog } from '@/entities/blog/types';
import { request } from '@/shared/apis';

type FetchBlogListResponse = {
  contents: Blog[];
};

export const fetchBlogList = async (params?: {
  category?: string;
  tags?: string;
}) => {
  const searchParams = new URLSearchParams();

  if (params) {
    if (params.category) searchParams.append('category', params.category);
    if (params.tags) searchParams.append('tags', params.tags);
  }

  const queryString = searchParams.toString();

  const res = await request<FetchBlogListResponse>(`/api/blog?${queryString}`);

  return res;
};
