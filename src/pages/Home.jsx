import HomeBanner from "../sections/HomeBanner";
import HomeCards from "../sections/HomeCards";

export default function Home() {
    return (
        <main className="flex flex-col">
            <HomeBanner />
            <HomeCards />
        </main>
    )
}