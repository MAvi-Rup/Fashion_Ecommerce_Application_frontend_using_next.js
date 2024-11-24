import NewArrival from "@/components/NewArraival/NewArraival";
import Banner from "@/components/shared/Banner";
import Delivery from "@/components/shared/Delivery";
import HotDealBanner from "@/components/shared/HotDealBanner";

export default function Home() {
  return (
    <>
      <Banner />
      <Delivery />
      <NewArrival />
      <HotDealBanner />
    </>
  );
}
