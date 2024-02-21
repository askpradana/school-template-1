import { Flex } from "@radix-ui/themes";
import MainCarousel from "./widget_homepage/maincarousel";
import MainHeader from "./widget_homepage/mainheader";
import MenuBar from "./widget_homepage/menubar";
import MainPersk from "./widget_homepage/mainperks";
import MainFooter from "./widget_homepage/mainfooter";


export default function Home() {
  return (
    <div className="flex flex-col">

     <MainHeader />

      <MenuBar />

      <MainCarousel />

     <MainPersk />

     <MainFooter />
    </div>
  );
}
