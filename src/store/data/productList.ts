export type ICategoryProducts = "promo" | "snack" | "hotDish" | "salad" | "dessert" | "drink";

export interface ICategoryMenu {
  name: string;
  category: ICategoryProducts;
}

export const categoryMenu: ICategoryMenu[] = [
  { name: "Акция", category: "promo" },
  { name: "Холодные закуски", category: "snack" },
  { name: "Горячие блюда", category: "hotDish" },
  { name: "Салаты", category: "salad" },
  { name: "Десерты", category: "dessert" },
  { name: "Напитки", category: "drink" },
];

export interface IProduct {
  id: number;
  category: ICategoryProducts;
  promo: boolean;
  name: string;
  description: string;
  weight: number;
  price: number;
  photo: string;
}

export const productsList: IProduct[] = [
  {
    id: 0,
    category: "hotDish",
    promo: true,
    name: "Казан - кебаб",
    description: "Горячее блюдо из мяса и картофеля.",
    weight: 330,
    price: 399,
    photo: "",
  },
];
