export default function OrderSummary({extras, total, bgColor, textColor, titleColor}) {
    
    const summaryBase = "w-70 md:w-87 border border-[#D9D9D9] rounded-md md:rounded-tl-md md:rounded-tr-md flex flex-col p-10 gap-3 font-['Barlow'] font-semibold leading-6"
    const textBase = "flex text-lg justify-between";
    const summaryTitleBase = "text-xl";

    const bgColors = {
        order: "bg-floral-white",
        summary: "bg-strong-red"
    };

    const textColors = {
        order: "text-light-gray",
        summary: "text-white",
        orderTitle: "text-dark-gray"
    };

    const sectionClass = `${summaryBase} ${bgColors[bgColor]}`;
    const textClass = `${textBase} ${textColors[textColor]}`;
    const titleClass = `${summaryTitleBase} ${textColors[textColor]}`;

    return (
        <>
            <div className={sectionClass}>
                    <h2 className={titleClass}>Sipariş Toplamı</h2>
                    <div className="flex flex-col gap-2">
                        <div className={textClass}>
                            <h3>Seçimler</h3>
                            <h3>{extras.toFixed(2)}₺</h3>
                        </div>
                        <div className={textClass}>
                            <h3>Toplam</h3>
                            <h3>{total.toFixed(2)}₺</h3>
                        </div>
                    </div>
            </div>
        </>
    )
}