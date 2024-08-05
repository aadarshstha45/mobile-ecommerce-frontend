export interface Datum {
  id: number;
  name: string;
  is_new: boolean;
  discount: number;
  category: Category;
  subcategory: Subcategory;
  brand?: Brand;
  description?: string;
  price: number;
  available_qty: number;
  product_images: Productimage[];
  product_specifications: Productspecification[];
  product_properties: (
    | Productproperty
    | Productproperties2
    | Productproperties3
  )[];
  rating: Rating;
  image: string;
  video?: string;
}

export interface Rating {
  average: number;
  total: number;
}

export interface Productproperties3 {
  id: number;
  color: Color;
  images: any[];
  sizes: Size2[];
}

export interface Productproperties2 {
  id: number;
  color: Color;
  images: Image[];
  sizes: Size2[];
}

export interface Productproperty {
  id: number;
  color: Color;
  images: Image[];
  sizes: Size2[];
}

export interface Size2 {
  id: number;
  price: number;
  size: Size;
}

export interface Size {
  id: string;
  name: string;
}

export interface Image {
  id: number;
  image: string;
}

export interface Color {
  id: number;
  name: string;
  hex_value: string;
  is_active: string;
  created_at: string;
  updated_at: string;
}

export interface Productspecification {
  id: number;
  name: string;
  specification: string;
}

export interface Productimage {
  id: number;
  product_id: string;
  image: string;
}

export interface Brand {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  subcategories: Subcategory[];
  image: string;
}

export interface Subcategory {
  id: number;
  name: string;
  category_id: number;
  slug: string;
}
