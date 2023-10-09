export enum Category {
  Empty = "",
  Sale = "sale",
  Regular = "regular",
  Newest = "newest",
  Bargain = "bargain",
}

export interface Product {
  id: string;
  title: string;
  price: number;
  desc: string;
  quantity: number;
  category: Category;
}

export interface GetProductResponse {
  current_page: number;
  data: Product[];
  total: number;
  last_page: number;
}

export interface ProductToAdd {
  title: string;
  price: number;
  desc: string;
  category: Category;
}
