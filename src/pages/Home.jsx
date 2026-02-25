import HomeBanner from "../sections/HomeBanner";
import HomeCards from "../sections/HomeCards";
import HomeMenuCards from "../sections/HomeMenuCards";
import HomeNavs from "../sections/HomeNavs";

export default function Home() {
    return (
        <section className="flex flex-col">
            <HomeBanner />
            <HomeCards />
            <HomeNavs />
            <HomeMenuCards />
        </section>
    )
}