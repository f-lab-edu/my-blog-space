import { BlogList } from '@/features/blog/components';
import { fetchBlogList } from '@/features/blog/apis';

export default async function Page() {
  const { contents } = await fetchBlogList();

  return (
    <>
      <article className='flex flex-col gap-5'>
        <p>전체글 ({`${contents.length}`})</p>
        <BlogList contents={contents} />
      </article>
      <article
        style={{ columnGap: '3.875rem' }}
        className='flex flex-wrap gap-y-5 mt-10'
      >
        <div
          style={{ width: '198px', height: '198px' }}
          className='bg-slate-50'
        />
        <div
          style={{ width: '198px', height: '198px' }}
          className='bg-slate-50'
        />
        <div
          style={{ width: '198px', height: '198px' }}
          className='bg-slate-50'
        />
        <div
          style={{ width: '198px', height: '198px' }}
          className='bg-slate-50'
        />

        <div
          style={{ width: '198px', height: '198px' }}
          className='bg-slate-50'
        />
        <div
          style={{ width: '198px', height: '198px' }}
          className='bg-slate-50'
        />
      </article>
    </>
  );
}
