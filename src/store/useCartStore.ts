import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id: number;
  name: string;
  price: string;
  quantity?: number;
}

// type interface for the state - products, totalItems and totalPrice
type State = {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
};

// type interface for the function actions
type Action = {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

// state for the add to cart, price update, quatity update and remove or clear cart function
export const useCartStore = create<State & Action>()(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: 0,
      totalPrice: 0,
      addToCart: (item: Product) => {
        const { cart } = get();
        const exists = cart.find((p) => p.id === item.id);
        let newCart: Product[];
        if (exists) {
          newCart = cart.map((p) =>
            p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
          );
        } else {
          newCart = [...cart, { ...item, quantity: 1 }];
        }
        const totalItems = newCart.reduce(
          (sum, p) => sum + (p.quantity || 0),
          0
        );
        const totalPrice = newCart.reduce(
          (sum, p: any) => sum + p.price * (p.quantity || 0),
          0
        );
        set({ cart: newCart, totalItems, totalPrice });
      },
      removeFromCart: (id: number) => {
        const { cart } = get();
        let newCart = cart
          .map((p) =>
            p.id === id
              ? { ...p, quantity: Math.max((p.quantity || 1) - 1, 0) }
              : p
          )
          .filter((p) => p.quantity && p.quantity > 0);
        const totalItems = newCart.reduce(
          (sum, p) => sum + (p.quantity || 0),
          0
        );
        const totalPrice = newCart.reduce(
          (sum, p: any) => sum + p.price * (p.quantity || 0),
          0
        );
        set({ cart: newCart, totalItems, totalPrice });
      },
      clearCart: () => set({ cart: [], totalItems: 0, totalPrice: 0 }),
    }),
    {
      name: "cart-storage", // key in localStorage
    }
  )
);
