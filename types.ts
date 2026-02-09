
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  weight: string;
  tags: string[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
}

export enum NavigationTab {
  Home = 'home',
  Products = 'products',
  About = 'about',
  Sustainability = 'sustainability',
  Wholesale = 'wholesale',
  Recipes = 'recipes'
}
