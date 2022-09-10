const Footer = ({ lightText }) => {
    return (
        <div className={`${lightText ? "bg-[#565B60] text-[white]" : "bg-[#E8E7E7] text-[black]"} w-full flex flex-col lg:flex-row px-[12.5%] h-[95px] lg:h-[70px] justify-between items-center py-4 font-head text-[12px]`}>
            <a href="/#Öffnungszeiten">Öffnungszeiten</a>
            <a href="">Impressum & Datenschutz</a>
            <a href="tel:063215763330">Telefon: 06321 5763330</a>
        </div>
    );
}

export default Footer;