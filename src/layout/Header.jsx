import Logo from "../assets/logos/logo.svg"

export default function Header() {
    return(
        <header className="bg-strong-red flex justify-center items-center h-20">
            <figure className="w-75">
                <img src={Logo}/>
            </figure>
        </header>
    )
}