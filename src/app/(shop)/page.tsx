import NewArrival from "@/components/NewArraival/NewArraival";
import Banner from "@/components/shared/Banner";
import Collection from "@/components/shared/Collection";
import Delivery from "@/components/shared/Delivery";
import HotDealBanner from "@/components/shared/HotDealBanner";
import SummerDeal from "@/components/shared/SummerDeal";

export default function Home() {
  return (
    <>
      <Banner />
      <Delivery />
      <NewArrival />
      <HotDealBanner />
      <Collection />
      <SummerDeal />
    </>
  );
}
