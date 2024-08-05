export interface Datum {
  id: number;
  total_amount: string;
  payment_mode: string;
  payment_status: string;
  discount_amount: string;
  order_number: string;
  order_date: string;
  order_time: string;
  order_items: OrderItem[];
}

export interface OrderItem {
  id: number;
  quantity: string;
  price: string;
  discount: string;
  total: string;
  product: Product;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  subcategory: Category;
  color?: Color;
  size?: Color;
}

export interface Color {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}
