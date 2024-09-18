import { queryBlogList } from '@/features/blog/apis';
import { BlogList } from '@/features/blog/components';

export default async function Page({
  searchParams,
}: {
  searchParams: { category?: string; tags?: string };
}) {
  const { tags, category } = searchParams;
  const { contents } = await queryBlogList({ tags, category });

  return (
    <div>
      <BlogList contents={contents} />
    </div>
  );
}
