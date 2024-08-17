import { blogHandlers } from './blog';
import { galleryHandlers } from './gallery';

export const handlers = [...blogHandlers, ...galleryHandlers];
