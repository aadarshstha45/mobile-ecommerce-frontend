export interface RootInterface<T> {
  data: T;
  breadcrumbs?: Breadcrumbs;
  pagination?: Pagination;
  message: string;
}

export interface Pagination {
  total_items: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  first_page_url: string;
  last_page_url: string;
}

export interface Breadcrumbs {
  category: Category2;
}

export interface Category2 {
  name: string;
  slug: string;
}
