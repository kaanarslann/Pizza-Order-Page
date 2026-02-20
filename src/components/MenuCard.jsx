export default function MenuCard({image, title}) {
    return (
        <>
            <figure className="bg-white rounded-xl p-8 flex flex-col gap-3 justify-between items-center">
                <img src={image} className="w-67.5 h-66 object-cover"/>
                <h4 className="font-['Barlow'] text-dark-gray text-xl leading-6 font-semibold">{title}</h4>
                <div className="flex gap-15 font-['Barlow'] text-dark-gray text-base font-semibold leading-7">
                    <span className="text-[#1B1B1BB2]">4.9</span>
                    <span className="text-[#1B1B1BB2]">(200)</span>
                    <span className="font-bold">60₺</span>
                </div>
            </figure>
        </>
    )
}