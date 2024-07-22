import Image from 'next/image';

const fetchBlogs = async () => {
  const res = await fetch('http://localhost:3000/api/blog');
  const { data } = await res.json();
  return data;
};

export default async function Page() {
  const { contents } = await fetchBlogs();

  return (
    <>
      <article className='flex flex-col gap-5'>
        <p>전체글 ({`${contents.length}`})</p>
        {contents.map((data: any) => (
          <div key={data.id} className='flex justify-between cursor-pointer'>
            <div>
              <p className='font-bold'>{data.title}</p>
              <p>{data.content}</p>
              <p className='font-light text-xs'>{data.date}</p>
            </div>
            <div className='relative w-16 h-16 bg-slate-100'>
              <Image alt='blog-thumbnail' src={data.thumbnail} fill={true} />
            </div>
          </div>
        ))}
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
