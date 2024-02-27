import Image from "next/image";
import LogoSekolah from "../../public/logosekolah.png";
import LogoDaerah from "../../public/logodaerah.png";

export default function MainHeader() {
    return (
        <div className="flex flex-wrap justify-between items-center px-3 md:px-12 mt-12">
            <Image src={LogoSekolah} alt="Logo Sekolah" className="w-[100px] md:w-[240px]" />
            <h1 className="text-lg md:text-4xl">Nama Sekolah</h1>
            <Image src={LogoDaerah} alt="Logo Daerah" className="w-[100px] md:w-[240px]" />
        </div>
    )
}