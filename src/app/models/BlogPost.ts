export type BlogStatus = 'DRAFT' | 'PUBLISHED';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  coverImage: string | null;
  status: BlogStatus;
  publishedAt: string | null;
  authorId: number | null;
  authorName: string | null;
  authorPhotoUrl: string | null;
  category: string | null;
  tags: string[] | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
}
