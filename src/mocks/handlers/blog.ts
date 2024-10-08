import { http, HttpResponse } from 'msw';
import { MOCK_BASE_URL } from './constants';

const getBlogList = http.get(`${MOCK_BASE_URL}/api/blog`, () => {
  return HttpResponse.json({
    data: {
      contents: [
        {
          id: 1,
          slug: 'first-blog-content',
          title: 'First Blog Post',
          content: 'This is the first blog post content.',
          date: '2024-07-21',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/3FEF9DDF-3E33-4FF6-93A6-E86D4B046088.JPG?alt=media&token=7080d1f0-927e-4649-85e7-b122a112629f',
        },
        {
          id: 2,
          title: 'Second Blog Post',
          slug: 'first-blog-content',
          content: 'This is the second blog post content.',
          date: '2024-07-22',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/3FEF9DDF-3E33-4FF6-93A6-E86D4B046088.JPG?alt=media&token=7080d1f0-927e-4649-85e7-b122a112629f',
        },
        {
          id: 3,
          title: 'Third Blog Post',
          content: 'This is the third blog post content.',
          slug: 'first-blog-content',
          date: '2024-07-23',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/3FEF9DDF-3E33-4FF6-93A6-E86D4B046088.JPG?alt=media&token=7080d1f0-927e-4649-85e7-b122a112629f',
        },
      ],
    },
  });
});

const getBlogDetail = http.get(`${MOCK_BASE_URL}/api/blog/:title`, () => {
  return HttpResponse.json({
    data: {
      id: 1,
      title: '[Solved] React CRA Build & Cache Busting',
      date: '2023-11-29',
      author: '공민지',
    },
  });
});

export const blogHandlers = [getBlogList, getBlogDetail];
