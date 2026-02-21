import Banner from "../assets/backgrounds/home.png"
import Logo from "../assets/logos/logo.svg"
import Button from "../components/Button"
import BannerNav from "../components/BannerNav"
import { useNavigate } from "react-router"

export default function HomeBanner() {
    
    const navigate = useNavigate();

    const bannerButton = () => {
        navigate("/order");
    };
    
    return (
        <>
            <section className="bg-cover bg-center h-[calc(100vh-(--spacing(20)))] flex flex-col justify-between" style={{backgroundImage: `url(${Banner})`}}>
                <div className="flex flex-col items-center gap-5 mx-auto pt-10">
                    <div className="flex flex-col items-center px-5">
                        <h2 className="text-warm-yellow font-['Satisfy'] text-[32px] leading-11 font-normal text-center hidden md:block">fırsatı kaçırma</h2>
                        <h1 className="text-white font-['Roboto_Condensed'] text-6xl leading-15 md:leading-20 font-light tracking-wide text-center">KOD ACIKTIRIR</h1>
                        <h1 className="text-white font-['Roboto_Condensed'] text-6xl leading-15 md:leading-20 font-light tracking-wide text-center">PİZZA, DOYURUR</h1>
                    </div>
                    <Button size="home" color="home" purpose={bannerButton}>ACIKTIM</Button>
                </div>
                <BannerNav />
            </section>
            
        </>
        
    )
}