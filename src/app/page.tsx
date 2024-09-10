import { BlogList } from '@/features/blog/components';
import { GalleryList } from '@/features/gallery/components';

import { queryGalleryList } from '@/features/gallery/apis';
import { queryBlogList } from '@/features/blog/apis';

export default async function Page() {
  const { contents: blogContents } = await queryBlogList();
  const { contents: galleryContents } = await queryGalleryList();

  return (
    <>
      <article className='flex flex-col gap-5'>
        <p>전체글 ({`${blogContents.length}`})</p>
        <BlogList contents={blogContents} />
      </article>
      <article className='mt-8'>
        <GalleryList contents={galleryContents} />
      </article>
    </>
  );
}
