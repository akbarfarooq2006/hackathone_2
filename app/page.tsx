
import Header1 from "@/components/header/Header1";
import FrontAds from "@/components/home/FrontAds";
import Popular from "@/components/home/Popular";
import Recomendation from "@/components/home/Recomendation";
import UpDrop from "@/components/home/UpDrop";


export default function Home() {
  return (
<>
<div>
<FrontAds/>
<UpDrop/>
{/* <Popular/> */}
<Popular/>
<Recomendation/>



</div>
</>   
);
}
