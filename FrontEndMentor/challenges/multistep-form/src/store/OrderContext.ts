import { createContext, useContext } from "react";
import arcade from "../assets/images/icon-arcade.svg";
import pro from "../assets/images/icon-pro.svg";
import advanced from "../assets/images/icon-advanced.svg";

export type plan = {
  id: number;
  name: string;
  price: number;
  img: string;
  select: boolean;
};

export type client = {
  name: string;
  email: string;
  phone: string;
};

export type addon = {
  id: number;
  type: string;
  title: string;
  desc: string;
  price: number;
  select:boolean,
};

export interface OrderState {
  client: client;
  plans: plan[];
  monthly: boolean;
  addons: addon[];
  total:number;
}

export type GlobalContent = {
  order: OrderState;
  setOrder: React.Dispatch<React.SetStateAction<OrderState>>;
};

export const plans: plan[] = [
  {
    id: 1,
    name: "Arcade",
    price: 9,
    img: arcade,
    select: false,
  },
  {
    id: 2,
    name: "Advanced",
    price: 12,
    img: advanced,
    select: false,
  },
  {
    id: 3,
    name: "Pro",
    price: 15,
    img: pro,
    select: false,
  },
];

export const addons: addon[] = [
  {
    id: 1,
    type: "Online",
    title: "Online service",
    desc: "Access to multiplayer games",
    price: 1,
    select:true,
  },
  {
    id: 2,
    type: "Larger",
    title: "Larger storage",
    desc: "Extra 1TBB of cloud save",
    price: 2,
    select:false,
  },
  {
    id: 3,
    type: "Customizable",
    title: "Customizable Profile",
    desc: "Custom theme on your profile",
    price: 2,
    select:false,
  },
];

export const OrderContext = createContext<GlobalContent>({
  order: {
    client: { name: "", email: "", phone: "" },
    plans: plans,
    monthly: false,
    addons: addons,
    total: 0,
  },
  setOrder: () => {},
});
export const useOrderContext = () => useContext(OrderContext);
