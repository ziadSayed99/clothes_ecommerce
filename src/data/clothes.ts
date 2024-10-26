export interface Image {
  src: string;
  id: number;
}

export interface Clothes {
  id: number;
  name: string;
  price: number;
  category: string;
  image: Image;
  description: string;
}