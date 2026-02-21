import data from "../data/data.js"

export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] flex font-['Barlow'] text-white mx-auto 
        justify-center items-center pt-20 pb-10 text-lg leading-8 px-20">
            <section className="flex flex-col md:flex-row gap-30">
                <div className="flex flex-col gap-9">
                    <img src={data.footerSection.logo} className="w-63 h-25"/>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <img src={data.footerSection.locationIcon} className="w-7 h-7"/>
                            <span>Sancaktepe, İstanbul</span>
                        </div>
                        <div className="flex gap-2">
                            <img src={data.footerSection.mailIcon} className="w-7 h-7"/>
                            <a href="https://personal-portfolio-page-liard.vercel.app/">Portföy Sayfası</a>
                        </div>
                        <div className="flex gap-2">
                            <img src={data.footerSection.phoneIcon} className="w-7 h-7"/>
                            <span>kaanarslan.work@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-medium">Hot Menu</h3>
                    <nav className="flex flex-col gap-1">
                        <a>Terminal Pizza</a>
                        <a>5 Kişilik Hackathlon Pizza</a>
                        <a>useEffect Tavuklu Pizza</a>
                        <a>Beyaz Console Frosty</a>
                        <a>Testler Geçti Mutlu Burger</a>
                        <a>Position Absolute Acı Burger</a>
                    </nav>
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-medium">Instagram</h3>
                    <div className="grid grid-cols-3 gap-3">
                        {data.footerSection.insta.map((photo, index) => (
                            <img key={index} src={photo.image} className="w-26 h-26 object-contain"/>
                        ))}
                    </div>
                </div>
            </section>
        </footer>
    )
}