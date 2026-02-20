import OrderCard from "../components/OrderCard.jsx"
import data from "../data/data.js"

const bigOrder = data.orderCards.big;

export default function HomeCards() {
    return (
        <section className="bg-floral-white pt-20">
            <div className="flex justify-center">
                <article className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 justify-items-center gap-3">
                {data.orderCards.map((card, index) => (
                    <OrderCard key={index} size={card.size} title={card.title} fontStyle={card.size}
                    description={card.description} bgImage={card.image} buttonColor="card" 
                    buttonSize="card" className={`${index === 0 ? "md:row-span-2": ""}`}/>
                ))}
                </article>
            </div>
        </section>
    )
}