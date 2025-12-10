export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock?: number;
  sizes: string[];
  colors: string[];
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
  createdAt?: Date;
  updatedAt?: Date;
} 