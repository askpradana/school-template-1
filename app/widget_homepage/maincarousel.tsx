"use client"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Gambar1 from "../../public/gambar1.png";
import Gambar2 from "../../public/gambar2.png";


export default function MainCarousel() {


    return (
        <div className="flex justify-center mt-12">
            <Carousel width="700px" autoPlay={true} interval={2000} infiniteLoop={true} showIndicators={false} showStatus={false}>
                <div>
                    <Image src={Gambar1} alt="image1" />
                </div>
                <div>
                    <Image src={Gambar2} alt="image2" />
                </div>
            </Carousel>
        </div>
    );
}
