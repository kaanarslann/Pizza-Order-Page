import Ramen from "../assets/icons/ramen.svg";
import Pizza from "../assets/icons/pizza.svg";
import Burger from "../assets/icons/burger.svg";
import Fries from "../assets/icons/fries.svg";
import FFood from "../assets/icons/fastfood.svg";
import Drink from "../assets/icons/drink.svg";
import Card1 from "../assets/backgrounds/card1.png";
import Card2 from "../assets/backgrounds/card2.png";
import Card3 from "../assets/backgrounds/card3.png";

const data = {
    bannerNav: [
        {
            icon: Ramen,
            text: "Ramen"
        },
        {
            icon: Pizza,
            text: "Pizza"
        },
        {
            icon: Burger,
            text: "Burger"
        },
        {
            icon: Fries,
            text: "Kızartmalar"
        },
        {
            icon: FFood,
            text: "Fast Food"
        },
        {
            icon: Drink,
            text: "Gazlı İçecek"
        }
    ],
    orderCards: [
        {
            size: "big",
            image: Card1,
            title: "Özel Lezzetus",
            description: "Position: Absolute Acı Burger"
        },
        {
            size: "small",
            image: Card2,
            title: "Hackathlon Burger Menu",
        },
        {
            size: "small",
            image: Card3,
            title: "Çoooook hızlı npm gibi kurye",
        },
    ]
}

export default data;