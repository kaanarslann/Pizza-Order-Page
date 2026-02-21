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
import FooterLogo from "../assets/logos/logofooter.svg";
import Insta1 from "../assets/instagram/insta1.png";
import Insta2 from "../assets/instagram/insta2.png";
import Insta3 from "../assets/instagram/insta3.png";
import Insta4 from "../assets/instagram/insta4.png";
import Insta5 from "../assets/instagram/insta5.png";
import Insta6 from "../assets/instagram/insta6.png";
import LocationIcon from "../assets/icons/icon-1.png";
import MailIcon from "../assets/icons/icon-2.png";
import PhoneIcon from "../assets/icons/icon-3.png";

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
    ],
    footerSection: {
        logo: FooterLogo,
        locationIcon: LocationIcon,
        mailIcon: MailIcon,
        phoneIcon: PhoneIcon,
        insta: [
            {
                image: Insta1
            },
            {
                image: Insta2
            },
            {
                image: Insta3
            },
            {
                image: Insta4
            },
            {
                image: Insta5
            },
            {
                image: Insta6
            },
        ]
    }
}

export default data;