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
  {
    id: 1,
    category: "drink",
    promo: false,
    name: "Зеленый чай",
    description: "Просто зеленый чай...",
    weight: 250,
    price: 120,
    photo: "",
  },
  {
    id: 2,
    category: "salad",
    promo: true,
    name: "Греческий салат",
    description: "Набор овощей...",
    weight: 250,
    price: 120,
    photo: "",
  },
  {
    id: 3,
    category: "drink",
    promo: false,
    name: "Черный чай",
    description: "Просто черный чай...",
    weight: 250,
    price: 120,
    photo: "",
  },
];
