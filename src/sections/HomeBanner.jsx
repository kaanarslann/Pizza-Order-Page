import Banner from "../assets/backgrounds/home.png"
import Logo from "../assets/logos/logo.svg"
import Button from "../components/Button"
import BannerNav from "../components/BannerNav"

export default function HomeBanner() {
    return (
        <>
            <section className="bg-cover bg-center h-screen flex flex-col justify-between" style={{backgroundImage: `url(${Banner})`}}>
                <div className="flex flex-col items-center pt-20 md:pt-10 gap-5 mx-auto">
                    <figure className="w-75 flex items-center pb-5">
                        <img src={Logo}/>
                    </figure>
                    <div className="flex flex-col items-center px-5">
                        <h2 className="text-warm-yellow font-['Satisfy'] text-[32px] leading-11 font-normal text-center hidden md:block">fırsatı kaçırma</h2>
                        <h1 className="text-white font-['Roboto_Condensed'] text-6xl leading-15 md:leading-20 font-light tracking-wide text-center">KOD ACIKTIRIR</h1>
                        <h1 className="text-white font-['Roboto_Condensed'] text-6xl leading-15 md:leading-20 font-light tracking-wide text-center">PİZZA, DOYURUR</h1>
                    </div>
                    <Button size="home" color="home">ACIKTIM</Button>
                </div>
                <BannerNav />
            </section>
            
        </>
        
    )
}