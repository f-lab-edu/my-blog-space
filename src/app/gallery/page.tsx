import { queryGalleryList } from '@/features/gallery/apis';
import { GalleryList } from '@/features/gallery/components';

export default async function Page({
  searchParams,
}: Readonly<{
  searchParams: { category?: string };
}>) {
  const { category } = searchParams;
  const response = await queryGalleryList({ category });

  return <GalleryList contents={response.contents} />;
}
