import NavCard from "./NavCard.jsx"
import data from "../data/data.js"

export default function BannerNav() {
    return (
        <>
            <div className="grid grid-cols-2 md:flex items-center justify-center gap-3 md:gap-15 bg-white py-5 md:py-3 px-10">
                {data.bannerNav.map((card, index) => (
                    <NavCard key={index} icon={card.icon} text={card.text}/>
                ))}
            </div>
        </>
    )
}