export default function Button({size, color, children, purpose, orderSubmit}) {
    
    const base = "hover:cursor-pointer text-center flex items-center justify-center font-['Barlow']";
    
    const sizes = {
        home: "h-11 w-34  md:h-14 md:w-45 font-semibold text-md md:text-lg leading-14 rounded-[50px]",
        card: "md:h-12 md:w-34 h-9 w-35 font-semibold text-md md:text-lg leading-14 rounded-[50px]",
        number: "w-14 h-14 rounded-md font-bold",
        order: "h-15 md:w-87 w-70 rounded-md font-bold"
    };

    const colors = {
        home: "bg-warm-yellow text-dark-gray hover:bg-black hover:text-white",
        card: "bg-white text-strong-red hover:bg-black hover:text-white",
        number: "border-warm-yellow bg-warm-yellow text-black",
    };

    const className = `${base} ${sizes[size]} ${colors[color]}`;

    
    if(orderSubmit) {
        return (
            <button className={className} type="submit">
                {children}
            </button>
        )
    }
    
    return (
        <>
            <button className={className} onClick={purpose}>
                {children}
            </button>
        </>
    )
}