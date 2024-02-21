import MainCarousel from "./widget_homepage/maincarousel";
import MainHeader from "./widget_homepage/mainheader";
import MenuBar from "./widget_homepage/menubar";


export default function Home() {
  return (
    <div className="flex flex-col">

     <MainHeader />

      <MenuBar />

      <MainCarousel />
    </div>
  );
}
