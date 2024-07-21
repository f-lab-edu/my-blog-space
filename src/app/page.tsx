export default function Home() {
  return (
    <>
      <article className='flex flex-col gap-5'>
        <p>전체글 (32)</p>
        <div className='flex justify-between'>
          <div>
            <p className='font-bold'>2023 회고</p>
            <p>2023년ㅇ에는 이렇게 살았어용</p>
            <p className='font-light text-xs'>2023.12.31</p>
          </div>
          <div className='w-16 h-16 bg-slate-100' />
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='font-bold'>2023 회고</p>
            <p>2023년ㅇ에는 이렇게 살았어용</p>
            <p className='font-light text-xs'>2023.12.31</p>
          </div>
          <div className='w-16 h-16 bg-slate-100' />
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='font-bold'>2023 회고</p>
            <p>2023년ㅇ에는 이렇게 살았어용</p>
            <p className='font-light text-xs'>2023.12.31</p>
          </div>
          <div className='w-16 h-16 bg-slate-100' />
        </div>
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
