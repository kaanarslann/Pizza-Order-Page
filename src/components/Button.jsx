export default function Button({size, color, purpose, children}) {
    
    const base = "rounded-[50px] hover:bg-black hover:text-white hover:cursor-pointer text-center flex items-center justify-center";
    
    const sizes = {
        home: "h-11 w-34  md:h-14 md:w-45",
        card: "h-12 w-34",
    };

    const colors = {
        home: "bg-warm-yellow text-dark-gray font-['Barlow'] font-semibold text-lg leading-14",
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