export default function NavCard({icon, text}) {
    return (
        <>
            <div className="flex gap-2 items-center">
                <img src={icon}/>
                <span>{text}</span>
            </div>
        </>
    )
}