export default function NavCard({icon, text}) {
    return (
        <>
            <div className="flex gap-2 items-center">
                <img src={icon} className="w-7 h-7"/>
                <span className="font-['Barlow'] font-medium text-lg leading-8">{text}</span>
            </div>
        </>
    )
}