import Button from "./Button";

export default function OrderCard({ className ="", fontStyle, size, bgImage, title, description, buttonSize, buttonColor}) {
    
    const base = "bg-cover rounded-xl";
    
    const sizes = {
        big: "md:w-133 md:h-112 w-80 h-75",
        small: "md:w-133 w-80 md:h-55 h-37"
    };

    const fontStyles = {
        big: "font-['Quattrocento'] font-bold text-5xl md:text-6xl leading-12 md:leading-16 text-white w-72",
        small: "font-['Barlow'] font-semibold text-2xl md:text-3xl text-red-600 leading-8 md:leading-11 w-45 md:w-50",
    }

    const classNameFinal = `${className} ${base} ${sizes[size]}`;
    const titleClassName = `${fontStyles[fontStyle]}`
    
    return (
        <>
            <div className={classNameFinal} style={{backgroundImage: `url(${bgImage})`}}>
                <div className="order-card-inner flex flex-col gap-3 md:gap-5 pt-4 md:pt-8 pl-5 md:pl-10">
                    <h1 className={titleClassName}>{title}</h1>
                    <h3 className={description ? "font-['Barlow'] block font-semibold text-lg md:text-xl leading-6 pb-2 md:pb-0 text-white" : "hidden"}>{description}</h3>
                    <Button size={buttonSize} color={buttonColor}>SİPARİŞ VER</Button>
                </div>
            </div>
        </>
    )
}