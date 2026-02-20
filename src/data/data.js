import Ramen from "../assets/icons/ramen.svg";
import Pizza from "../assets/icons/pizza.svg";
import Burger from "../assets/icons/burger.svg";
import Fries from "../assets/icons/fries.svg";
import FFood from "../assets/icons/fastfood.svg";
import Drink from "../assets/icons/drink.svg";
import Card1 from "../assets/backgrounds/card1.png";
import Card2 from "../assets/backgrounds/card2.png";
import Card3 from "../assets/backgrounds/card3.png";
import PizzaMenu1 from "../assets/foods/pizza1.png";
import PizzaMenu2 from "../assets/foods/pizza2.png";
import BurgerMenu from "../assets/foods/burger.png";

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
    ],
    menuCards: [
        {
            image: PizzaMenu1,
            text: "Terminal Pizza"
        },
        {
            image: PizzaMenu2,
            text: "Position Absolute Acı Pizza"
        },
        {
            image: BurgerMenu,
            text: "useEffect Tavuklu Burger"
        }
    ]
}

export default data;