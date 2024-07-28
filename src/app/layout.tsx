import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import './globals.css';
import { roboto, roboto_serif, noto_sans } from '../shared/font';
import Navigation from './Navigation';
import { initMSW } from '@/mocks';

export const metadata: Metadata = {
  title: 'Good thing lasts',
  description: 'Blog By Benzy',
};

if (process.env.NODE_ENV !== 'production') {
  initMSW();
}

function Header() {
  return (
    <header className='mb-5 w-content m-auto'>
      <div className='flex items-end justify-between h-20'>
        <div className='flex justify-between items-end w-54'>
          <h1 className='text-4xxl font-bold'>공민지</h1>
          <div className='flex items-end'>
            <button className='btn btn-circle min-h-8 min-w-8 h-8 w-8'>
              <Image src='/mail.svg' alt='mail-icon' width={20} height={20} />
            </button>
            <Link href='https://github.com/benzyminzy'>
              <button className='btn btn-circle ml-1 min-h-8 min-w-8 h-8 w-8'>
                <Image
                  src='/github-mark.svg'
                  alt='github-icon'
                  width={20}
                  height={20}
                />
              </button>
            </Link>
          </div>
        </div>
        <input
          type='checkbox'
          value='synthwave'
          className='toggle theme-controller'
        />
      </div>
      <p className='mt-5 h-20'>
        노력은 수단이 아니라 그 자체로 목적이다. <br />
        계속해서 나아지는 형태의 삶을 지향합니다.
      </p>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      data-theme='wireframe'
      className={`${roboto.variable} ${roboto_serif.variable} ${noto_sans.variable}`}
    >
      <body className='py-5 px-10'>
        <Header />
        <div className='flex w-content m-auto'>
          <Navigation />
          <main className='flex-1'>{children}</main>
        </div>
      </body>
    </html>
  );
}
