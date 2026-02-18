import NavCard from "../components/NavCard.jsx"
import data from "../data/data.js"

export default function BannerNav() {
    return (
        <>
            <div className="flex items-center justify-center gap-5">
                {data.bannerNav.map((card, index) => (
                    <NavCard key={index} icon={card.icon} text={card.text}/>
                ))}
            </div>
        </>
    )
}