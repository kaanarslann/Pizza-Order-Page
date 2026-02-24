import Button from "../components/Button.jsx";
import data from "../data/data.js"

export default function OrderForm() {
    
    const buttonStyle = "flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full border border-floral-white bg-floral-white hover:bg-[#FFEECC] text-light-gray font-['Barlow'] font-medium";
    
    return (
        <>
            <form className="max-w-xl mx-auto pt-10 px-15 md:px-0">
                <div className="flex justify-between">
                    <section className="flex flex-col gap-3 items-center md:items-start">
                        <h2 className="font-['Barlow'] font-semibold text-lg leading-6 text-dark-gray">Boyut Seç <span className="text-strong-red">*</span></h2>
                        <div className="flex flex-col md:flex-row gap-2">
                            <label className="cursor-pointer" htmlFor="size">
                                <input name="size" type="radio" value="S" className="peer hidden"/>
                                <span className={buttonStyle}>S</span>
                            </label>
                            <label className="cursor-pointer" htmlFor="size">
                                <input name="size" type="radio" value="M" className="peer hidden"/>
                                <span className={buttonStyle}>M</span>
                            </label>
                            <label className="cursor-pointer" htmlFor="size">
                                <input name="size" type="radio" value="L" className="peer hidden"/>
                                <span className={buttonStyle}>L</span>
                            </label>
                        </div>
                    </section>
                    <section className="flex flex-col gap-3">
                        <h2 className="font-['Barlow'] font-semibold text-lg leading-6 text-dark-gray">Hamur Seç <span className="text-strong-red">*</span></h2>
                        <div>
                            <label htmlFor="dough"></label>
                            <select type="select" name="dough" id="dough" className="h-10 md:h-14 border border-floral-white rounded-lg 
                            bg-floral-white text-light-gray p-2 font-['Barlow'] font-medium">
                                <option>-Hamur Kalınlığı Seç-</option>
                                <option>İnce</option>
                                <option>Normal</option>
                            </select>
                        </div>
                    </section>
                </div>
                <section className="flex flex-col gap-2 pt-10">
                    <h2 className="font-['Barlow'] font-semibold text-lg leading-6 text-dark-gray">Ek Malzemeler</h2>
                    <h3 className="font-['Barlow'] font-medium leading-14 text-light-gray">En fazla 10 malzeme seçebilirsiniz. 5₺</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {data.orderToppings.map((topping, index) => (
                            <div key={index} className="flex items-center">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="peer hidden" />
                                    <span className="
                                        relative w-10 h-10
                                        rounded border border-floral-white
                                        bg-floral-white
                                        transition
                                        peer-checked:bg-warm-yellow
                                        peer-checked:border-warm-yellow
                                        after:content-['✓']
                                        after:absolute after:inset-0
                                        after:flex after:items-center after:justify-center
                                        after:text-dark-gray after:font-bold after:text-lg
                                        after:opacity-0
                                        peer-checked:after:opacity-100
                                        "/>
                                    <span className="font-['Barlow'] font-bold text-light-gray leading-7">{topping}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="pt-10 flex flex-col gap-5">
                    <h2 className="font-['Barlow'] font-semibold text-lg leading-6 text-dark-gray">Sipariş Notu</h2>
                    <input type="text" className="h-14 w-full border border-floral-white rounded-lg 
                            bg-floral-white text-light-gray font-['Barlow'] p-2 text-sm font-medium" 
                            placeholder="Siparişine eklemek istediğin bir not var mı?"/>
                </section>
                <section className="pt-10 pb-20">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between">
                        <div className="flex justify-center md:justify-start">
                            <Button color="number" size="number">-</Button>
                            <span className="w-14 h-14 border border-[#D9D9D9] flex justify-center 
                            items-center rounded-md font-['Barlow'] font-bold">1</span>
                            <Button color="number" size="number">+</Button>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="w-70 md:w-87 border border-[#D9D9D9] bg-floral-white rounded-md
                            md:rounded-tl-md md:rounded-tr-md flex flex-col p-10 gap-3 font-['Barlow'] font-semibold leading-6">
                                <h2 className="text-xl text-dark-gray">Sipariş Toplamı</h2>
                                <div className="flex flex-col gap-2">
                                    <div className="flex text-lg text-light-gray justify-between">
                                        <h3>Seçimler</h3>
                                        <h3>25.00₺</h3>
                                    </div>
                                    <div className="flex text-lg text-strong-red justify-between">
                                        <h3>Toplam</h3>
                                        <h3>110.50₺</h3>
                                    </div>
                                </div>
                            </div>
                            <Button size="order" color="number">SİPARİŞ VER</Button>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}