'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();

  const tag = searchParams.get('tag');
  const category = searchParams.get('category');

  return <div>BLOG</div>;
}
