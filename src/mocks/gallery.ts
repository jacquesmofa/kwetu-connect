/**
 * Gallery data loader. The photos and albums live in src/content/gallery.json
 * (editable in Pages CMS and at /admin: "Gallery: albums and photos").
 *
 * Real photos only: never an AI-made or stock picture presented as an event photo.
 * To add an album: add it under "albums" (id + name), then add photos whose
 * "category" is that album id. Photos are shown in the order they are listed.
 */
import data from '../content/gallery.json';

export interface GalleryImage {
  id: string;
  category: string;
  title: string;
  description: string;
  url: string;
  aspectRatio: 'tall' | 'wide' | 'square';
}

export const galleryCategories: { id: string; name: string }[] = data.albums ?? [];

export const galleryImages: GalleryImage[] = (data.photos ?? []).map((p) => ({
  ...p,
  aspectRatio: (['wide', 'tall', 'square'].includes(p.aspectRatio) ? p.aspectRatio : 'wide') as GalleryImage['aspectRatio'],
}));
