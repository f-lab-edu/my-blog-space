'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <html className='content-center h-full'>
      <body className='text-center'>
        <p>애플리케이션에 문제가 발생했습니다.</p>
        {error.digest && (
          <p className='error-digest'>오류 참조 번호: {error.digest}</p>
        )}
        <button className='font-serif border mt-4 p-4' onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
