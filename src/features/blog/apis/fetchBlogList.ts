import { Blog } from '@/entities/blog/types';
import { request } from '@/shared/apis';

type FetchBlogListResponse = {
  contents: Blog[];
};

export const fetchBlogList = async (params?: {
  category?: string;
  tag?: string;
}) => {
  const searchParams = new URLSearchParams();

  if (params) {
    if (params.category) searchParams.append('category', params.category);
    if (params.tag) searchParams.append('tag', params.tag);
  }

  const queryString = searchParams.toString();

  const res = await request<FetchBlogListResponse>(`/api/blog?${queryString}`);

  return res;
};
