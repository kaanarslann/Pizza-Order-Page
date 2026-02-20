export default function NavCard({icon, text, place}) {
    return (
        <>
            <div className={place === "HomeNavs" ? `flex gap-2 items-center bg-white border border-white p-2 rounded-[50px] hover:bg-black hover:text-white` : "flex gap-2 items-center"}>
                <img src={icon} className="w-7 h-7"/>
                <span className="font-['Barlow'] font-medium text-lg leading-8">{text}</span>
            </div>
        </>
    )
}