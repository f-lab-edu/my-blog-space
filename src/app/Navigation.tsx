import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='menu w-54 mr-5 p-0'>
      <ul className='flex flex-col gap-5 font-serif font-black text-xl'>
        <li>
          <details>
            <summary className='p-0 pr-2'>BLOG</summary>
            <ul className='mt-5'>
              {['ALL', '2023', '2024'].map((category) => {
                return (
                  <li key={category} className='font-medium'>
                    <Link href={`/blog?&category=${category}`} className='p-0'>
                      {category}
                    </Link>
                  </li>
                );
              })}
              <li className='mt-5 font-normal mb-2'>TAGS</li>
              <div className='flex flex-wrap gap-1'>
                {['#JAVASCRIPT', '#REACT', '#NEXT.js', '#HTML', '#CSS'].map(
                  (tag) => {
                    return (
                      <button
                        key={tag}
                        className='btn p-0 min-h-0 min-w-0 h-6 px-2'
                      >
                        {tag}
                      </button>
                    );
                  }
                )}
              </div>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary className='p-0 pr-2'>GALLERY</summary>
            <ul className='mt-5'>
              <li className='font-medium'>
                <Link href={`/gallery?&category=tech`} className='p-0'>
                  TECH
                </Link>
              </li>
              <li className='font-medium'>
                <Link href={`/gallery?&category=arts`} className='p-0'>
                  ARTS
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href='/portfolio' className='p-0'>
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link href='/resume' className='p-0'>
            RESUME
          </Link>
        </li>
        <li>
          <Link href='/guest' className='p-0'>
            GEUST BOOK
          </Link>
        </li>
      </ul>
    </nav>
  );
}
