import Brands from "./_components/Brands";
import CatesForMens from "./_components/CatesForMens";
import CatesForWomens from "./_components/CatesForWomens";
import Deals from "./_components/Deals";
import Feedback from "./_components/Feedback";
import Hero from "./_components/Hero";
import InTheLimeLight from "./_components/InTheLimeLight";
import NewArrivals from "./_components/NewArrivals";

export default function Home() {
  return (
    <div>
      <Hero />
      <Deals />
      <NewArrivals />
      <CatesForMens />
      <CatesForWomens />
      <Brands />
      <InTheLimeLight />
      <Feedback />
    </div>
  );
}
