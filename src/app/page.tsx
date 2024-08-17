import { BlogList } from '@/features/blog/components';
import { fetchBlogList } from '@/features/blog/apis';
import { GalleryList } from '@/features/gallery/components';
import { fetchGalleryList } from '@/features/gallery/apis';

export default async function Page() {
  const { contents: blogContents } = await fetchBlogList();
  const { contents: galleryContents } = await fetchGalleryList();

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
