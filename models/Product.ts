export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  description?: string;
  stock?: number;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
} 