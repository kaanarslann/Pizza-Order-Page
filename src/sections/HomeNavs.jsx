import NavCard from "../components/NavCard"
import data from "../data/data.js"

export default function HomeNavs() {
    return (
        <section className="pt-10 bg-floral-white">
            <div className="flex flex-col gap-5 px-5">
                <h3 className="text-strong-red font-['Satisfy'] font-normal text-3xl text-center">en çok paketlenen menüler</h3>
                <h2 className="text-dark-gray font-['Barlow'] font-semibold text-4xl text-center">Acıktıran Kodlara Doyuran Lezzetler</h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:flex justify-center gap-5 md:gap-16">
                        {data.bannerNav.map((nav, index) => (
                            <NavCard key={index} icon={nav.icon} text={nav.text} place="HomeNavs"/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}