import MenuCard from "../components/MenuCard.jsx"
import data from "../data/data.js"

export default function HomeMenuCards() {
    return (
        <section className="pt-10 pb-20 bg-floral-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {data.menuCards.map((card, index) => (
                    <MenuCard key={index} image={card.image} title={card.text}/>
                ))}
            </div>
        </section>
    )
}