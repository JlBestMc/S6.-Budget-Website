interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
}

export const products: Products[] = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card.",
    price: 300,
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card.",
    price: 400,
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card.",
    price: 500,
  },
];
