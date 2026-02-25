import { useContext } from "react"
import { OrderContext } from "../context/OrderContext"
import OrderSummary from "../components/OrderSummary";

export default function Success() {
    
    const {order} = useContext(OrderContext);

    const toppings = order.toppings.join(", ");

    const orderTime = `${order.orderDate} ${order.orderTime}`;

    
    return (
        <section className="bg-strong-red pt-10 pb-20">
            <div className="mx-auto flex flex-col items-center">
                <div className="flex flex-col gap-2">
                    <h2 className="font-['Satisfy'] text-3xl leading-11 text-center text-warm-yellow">lezzetin yolda</h2>
                    <h1 className="font-['Roboto_Condensed'] text-7xl leading-20 tracking-wide text-center text-white pb-5">SİPARİŞİN ALINDI</h1>
                    <div className="border-t border-floral-white pb-5 mx-10 md:mx-0"></div>
                </div>
                <article className="text-white font-['Barlow'] flex flex-col gap-5 items-center">
                    <h3 className="text-xl font-semibold leading-7 text-center">{order.title}</h3>
                    <div className="text-base leading-6 max-w-100 flex flex-col gap-3 px-15 md:px-10">
                        <h4>Boyut: <span className="font-bold">{order.size}</span></h4>
                        <h4>Hamur: <span className="font-bold">{order.dough}</span></h4>
                        <h4>Ek Malzemeler: <span className="font-bold">{toppings}</span></h4>
                        {order.note && (
                            <h4>Sipariş Notu: <span className="font-bold">{order.note}</span></h4>
                        )}
                        <h4>Sipariş Tarihi: <span>{orderTime}</span></h4>
                    </div>
                    <OrderSummary extras={order.toppingsExtra} total={order.totalPrice} titleColor="summary" bgColor="summary" textColor="summary"/>
                </article>
            </div>
        </section>
    )
}