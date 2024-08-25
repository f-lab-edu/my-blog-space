import { http, HttpResponse } from 'msw';
import { MOCK_BASE_URL } from './constants';

const getGalleryList = http.get(`${MOCK_BASE_URL}/api/gallery`, () => {
  return HttpResponse.json({
    data: {
      contents: [
        {
          id: 1,
          slug: 'first-gallery-content',
          title: 'First Gallery Content',
          date: '2024-07-21',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/76E90909-F619-4B11-90F8-873C51115085.JPG?alt=media&token=fc1e40c5-5397-497b-a33f-c974e294e7c4',
        },
        {
          id: 2,
          slug: 'second-gallery-content',
          title: 'Second Gallery Content',
          date: '2024-07-22',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/76E90909-F619-4B11-90F8-873C51115085.JPG?alt=media&token=fc1e40c5-5397-497b-a33f-c974e294e7c4',
        },
        {
          id: 3,
          slug: 'third-gallery-content',
          title: 'Third Gallery Content',
          date: '2024-07-23',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/76E90909-F619-4B11-90F8-873C51115085.JPG?alt=media&token=fc1e40c5-5397-497b-a33f-c974e294e7c4',
        },
        {
          id: 4,
          slug: 'fourth-gallery-content',
          title: 'Fourth Gallery Content',
          date: '2024-07-24',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/76E90909-F619-4B11-90F8-873C51115085.JPG?alt=media&token=fc1e40c5-5397-497b-a33f-c974e294e7c4',
        },
        {
          id: 5,
          slug: 'fifth-gallery-content',
          title: 'Fifth Gallery Content',
          date: '2024-07-25',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/my-blog-76a3f.appspot.com/o/76E90909-F619-4B11-90F8-873C51115085.JPG?alt=media&token=fc1e40c5-5397-497b-a33f-c974e294e7c4',
        },
      ],
    },
  });
});

export const galleryHandlers = [getGalleryList];
