import { Link } from "react-router"
import FormPizza from "../assets/foods/formPizza.png"

export default function OrderProduct() {
    return (
        <section className="bg-floral-white">
            <div className="flex flex-col gap-5 max-w-xl mx-auto px-15 md:px-0 pt-5 md:pt-0 pb-10">
                <figure className="md:flex justify-center hidden">
                    <img src={FormPizza}/>
                </figure>
                <article className="flex flex-col gap-5">
                    <div className="font-['Barlow'] font-medium text-base leading-7 flex gap-1">
                        <Link to="/" className="text-light-gray">Anasayfa</Link>
                        <span className="text-light-gray">-</span>
                        <Link className="text-strong-red">Sipariş Oluştur</Link>
                    </div>
                    <h2 className="font-['Barlow'] font-semibold text-[22px] leading-7 text-dark-gray">
                        Position Absolute Acı Pizza
                    </h2>
                    <div className="flex justify-between font-['Barlow']">
                        <span className="text-dark-gray font-bold text-2xl leading-9">85.50₺</span>
                        <div className="flex gap-20 text-light-gray leading-7">
                            <span>4.9</span>
                            <span>(200)</span>
                        </div>
                    </div>
                    <p className="font-['Barlow'] leading-7 text-light-gray">
                        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
                        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun 
                        ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan 
                        oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                    </p>
                </article>
            </div>
        </section>
    )
}