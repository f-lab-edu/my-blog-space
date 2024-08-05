import { http, HttpResponse } from 'msw';

const getBlogList = http.get('http://localhost:3000/api/blog', () => {
  return HttpResponse.json({
    data: {
      contents: [
        {
          id: 1,
          title: 'First Blog Post',
          content: 'This is the first blog post content.',
          date: '2024-07-21',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/3FEF9DDF-3E33-4FF6-93A6-E86D4B046088.JPG?alt=media&token=7080d1f0-927e-4649-85e7-b122a112629f',
        },
        {
          id: 2,
          title: 'Second Blog Post',
          content: 'This is the second blog post content.',
          date: '2024-07-21',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/3FEF9DDF-3E33-4FF6-93A6-E86D4B046088.JPG?alt=media&token=7080d1f0-927e-4649-85e7-b122a112629f',
        },
        {
          id: 3,
          title: 'Second Blog Post',
          content: 'This is the second blog post content.',
          date: '2024-07-21',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/3FEF9DDF-3E33-4FF6-93A6-E86D4B046088.JPG?alt=media&token=7080d1f0-927e-4649-85e7-b122a112629f',
        },
      ],
    },
  });
});

export const blogHandlers = [getBlogList];
