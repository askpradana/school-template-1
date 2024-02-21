import Image from "next/image";
import LogoSekolah from "../public/logosekolah.png";
import LogoDaerah from "../public/logodaerah.png";

export default function Home() {
  return (
   <div className="flex flex-row justify-between items-center bg-red-200 px-12 mt-12">
    <Image src={LogoSekolah} alt="Logo Sekolah" width={150} height={150} />
    <h1 className="text-4xl">Nama Sekolah</h1>
    <Image src={LogoDaerah} alt="Logo Daerah" width={150} height={150} />
   </div>
  );
}
