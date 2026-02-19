export default function Button({size, color, children}) {
    
    const base = "rounded-[50px] hover:bg-black hover:text-white hover:cursor-pointer text-center flex items-center justify-center font-['Barlow'] font-semibold text-md md:text-lg leading-14";
    
    const sizes = {
        home: "h-11 w-34  md:h-14 md:w-45",
        card: "md:h-12 md:w-34 h-9 w-35",
    };

    const colors = {
        home: "bg-warm-yellow text-dark-gray",
        card: "bg-white text-strong-red",
    };

    const className = `${base} ${sizes[size]} ${colors[color]}`;
    
    return (
        <>
            <button className={className}>
                {children}
            </button>
        </>
    )
}