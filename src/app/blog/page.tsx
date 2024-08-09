import { fetchBlogList } from '@/features/blog/apis';
import { BlogList } from '@/features/blog/components';

export default async function Page({
  searchParams,
}: {
  searchParams: { category?: string; tag?: string };
}) {
  const { tag, category } = searchParams;
  const { contents } = await fetchBlogList({ tag, category });

  return (
    <div>
      <BlogList contents={contents} />
    </div>
  );
}
