import { Product } from "./product";

export interface Order {
  id: string;
  userId: string;
  createdAt: string;
  value: number;
  products: Product[];
}
