export default async function BlogDetailPage({
  params,
}: Readonly<{
  params: { title: string };
}>) {
  const Article = await import(`./(post)/${params.title}.mdx`);
  const MDXContent = Article.default;

  return (
    <div className='prose prose-stone prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm dark:prose-headings:text-whiter text-center max-w-none '>
      <MDXContent />
    </div>
  );
}
