import HomeBanner from "../sections/HomeBanner";
import HomeCards from "../sections/HomeCards";
import HomeNavs from "../sections/HomeNavs";

export default function Home() {
    return (
        <main className="flex flex-col">
            <HomeBanner />
            <HomeCards />
            <HomeNavs />
        </main>
    )
}