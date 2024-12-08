import Header1 from "@/components/header/Header1";
import FrontAds from "@/components/home/FrontAds";
import Popular from "@/components/home/Popular";
import UpDrop from "@/components/home/UpDrop";
import Image from "next/image";

export default function Home() {
  return (
<>
<div>
  <Header1/>
  <FrontAds/>
<UpDrop/>
<Popular/>


  <div className="h-[200vh]"></div>
</div>
</>   
);
}
