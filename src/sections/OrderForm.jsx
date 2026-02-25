import Button from "../components/Button.jsx";
import data from "../data/data.js";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import OrderSummary from "../components/OrderSummary.jsx";

export default function OrderForm() {
    
    const {setOrder} = useContext(OrderContext);
    const navigate = useNavigate();
    
    const {
        register, 
        handleSubmit, 
        watch, 
        formState: {errors},
        setValue, 
        setError, 
        clearErrors
    } = useForm({
        defaultValues: {
            size: "",
            dough: "",
            toppings: [],
            note: "",
            quantity: 1,
            title: "Position Absulute Acı Pizza"
        }
    });

    const selectedToppings = watch("toppings");
    const selectedSize = watch("size");
    const size = watch("size");
    const toppings = watch("toppings") || [];
    const quantity = watch("quantity") || 1;

    const basePrice = 85.50;
    const sizePrices = {
        small: 0,
        medium: 15.50,
        large: 30
    };
    const toppingPrice = 5;

    const sizeExtra = sizePrices[size] || 0;
    const toppingsExtra = toppings.length * toppingPrice;
    const totalPrice = (basePrice + sizeExtra + toppingsExtra) * quantity;

    const increaseQuantity = () => {
        setValue("quantity", quantity + 1, {shouldValidate: true});
    }

    const decreaseQuantity = () => {
        if(quantity > 1) {
            setValue("quantity", quantity - 1, {shouldValidate: true});
        }
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.get(
                "https://time.now/developer/api/timezone/Europe/Istanbul"
            );

            const date = new Date(response.data.datetime);
            const orderDate = date.toLocaleDateString("tr-TR");
            const orderTime = date.toLocaleTimeString("tr-TR", {
            hour: "2-digit",
            minute: "2-digit"
            });

            setOrder({
            ...data,
            toppingsExtra,
            totalPrice,
            orderDate,
            orderTime
            });

            toast.success("Sipariş oluşturuldu!");
            navigate("/success");
            } catch (error) {
                console.error(error);

                const date = new Date();

                setOrder({
                    ...data,
                    toppingsExtra,
                    totalPrice,
                    orderDate: date.toLocaleDateString("tr-TR"),
                    orderTime: date.toLocaleTimeString("tr-TR", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                });

                toast.error("Zaman servisine ulaşılamadı. Yerel saat kullanıldı.");
                navigate("/success");
            }
        };
    
    const buttonStyle = "flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full border border-floral-white text-light-gray font-['Barlow'] font-medium";
    
    return (
        <>
            <form className="max-w-xl mx-auto pt-10 px-15 md:px-0" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between">
                    <section className="flex flex-col gap-3 items-center md:items-start">
                        <h2 className="font-['Barlow'] font-semibold text-lg leading-6 text-dark-gray">Boyut Seç <span className="text-strong-red">*</span></h2>
                        <div className="flex flex-col md:flex-row gap-2">
                            <label className="cursor-pointer">
                                <input type="radio" value="S" className="hidden" 
                                {...register("size", {required: "Boyut seçiniz"})}/>
                                <span className={`${buttonStyle} ${selectedSize === "S" ? "bg-[#FFEECC]" : "bg-floral-white"}`}>S</span>
                            </label>
                            <label className="cursor-pointer">
                                <input type="radio" value="M" className="hidden" 
                                {...register("size")}/>
                                <span className={`${buttonStyle} ${selectedSize === "M" ? "bg-[#FFEECC]" : "bg-floral-white"}`}>M</span>
                            </label>
                            <label className="cursor-pointer">
                                <input type="radio" value="L" className="hidden" 
                                {...register("size")}/>
                                <span className={`${buttonStyle} ${selectedSize === "L" ? "bg-[#FFEECC]" : "bg-floral-white"}`}>L</span>
                            </label>
                        </div>
                        {errors.size && (
                            <p className="text-strong-red text-sm">{errors.size.message}</p>
                        )}
                    </section>
                    <section className="flex flex-col gap-3">
                        <h2 className="font-['Barlow'] font-semibold text-lg leading-6 text-dark-gray">Hamur Seç <span className="text-strong-red">*</span></h2>
                        <div>
                            <label htmlFor="dough"></label>
                            <select type="select" name="dough" id="dough" className="h-10 md:h-14 border border-floral-white rounded-lg 
                            bg-floral-white text-light-gray p-2 font-['Barlow'] font-medium" 
                            {...register("dough", {required: "Hamur tipi seçiniz."})}>
                                <option value="">-Hamur Kalınlığı Seç-</option>
                                <option value="Süpper İnce">Süpper İnce</option>
                                <option value="İnce">İnce</option>
                                <option value="Normal">Normal</option>
                            </select>
                            {errors.dough && (
                                <p className="text-strong-red text-sm">{errors.dough.message}</p>
                            )}
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
                                    <input type="checkbox" className="peer hidden" value={topping}
                                    {...register("toppings", {
                                        validate: (value) => value.length <= 10 || "En fazla 10 malzeme seçebilirsiniz"
                                    })}/>
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
                    {errors.toppings && (
                        <p className="text-strong-red text-sm">{errors.toppings.message}</p>
                    )}
                </section>
                <section className="pt-10 flex flex-col gap-5">
                    <h2 className="font-['Barlow'] font-semibold text-lg leading-6 text-dark-gray">Sipariş Notu</h2>
                    <input type="text" className="h-14 w-full border border-floral-white rounded-lg 
                            bg-floral-white text-light-gray font-['Barlow'] p-2 text-sm font-medium" 
                            placeholder="Siparişine eklemek istediğin bir not var mı?" 
                            {...register("note")}/>
                </section>
                <section className="pt-10 pb-20">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between">
                        <div className="flex justify-center md:justify-start">
                            <Button color="number" size="number" orderSubmit={false} purpose={decreaseQuantity}>-</Button>
                            <span className="w-14 h-14 border border-[#D9D9D9] flex justify-center 
                            items-center rounded-md font-['Barlow'] font-bold">{quantity}</span>
                            <Button color="number" size="number" orderSubmit={false} purpose={increaseQuantity}>+</Button>
                        </div>
                        <div className="flex flex-col items-center md:items-start">
                            <OrderSummary extras={toppingsExtra} total={totalPrice} titleColor="order" bgColor="order" textColor="order"/>
                            <Button size="order" color="number" orderSubmit={true}>SİPARİŞ VER</Button>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}