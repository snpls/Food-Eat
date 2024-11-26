import { bgImg, foods1, foods2, foods3 } from "../utils";
import { foodListType } from "./type";

export const navLinks = ['Home', 'Menu', 'About'];

export const foodList: foodListType[] = [
    {
        id:1,
        img:foods1,
        rating: "⭐⭐⭐⭐⭐",
        name:"Food Name 1",
        descp:"lorem ipsium dolor sit armet consectetur adiscing elit.",
        price:"$10.99",
    },
    {
        id:2,
        img:foods2,
        rating: "⭐⭐⭐⭐⭐",
        name:"Food Name 2",
        descp:"lorem ipsium dolor sit armet consectetur adiscing elit.",
        price:"$10.99",
    },
    {
        id:3,
        img:foods3,
        rating: "⭐⭐⭐⭐",
        name:"Food Name 3",
        descp:"lorem ipsium dolor sit armet consectetur adiscing elit.",
        price:"$10.99",
    }
]

export const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundReapeat: 'no-repeat',
    backgroundSize: "cover",
    backgroundPosition: "center",
}