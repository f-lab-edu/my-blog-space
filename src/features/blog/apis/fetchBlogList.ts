// TODO: shared/apis에 공통 가공 처리 분리하기

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

  const res = await fetch(
    `http://localhost:3000/api/blog${queryString ? `?${queryString}` : ''}`
  );

  const { data } = await res.json();
  return data;
};
