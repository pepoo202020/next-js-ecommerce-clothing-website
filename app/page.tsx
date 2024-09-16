import Brands from "./_components/Brands";
import CatesForMens from "./_components/CatesForMens";
import CatesForWomens from "./_components/CatesForWomens";
import Deals from "./_components/Deals";
import Hero from "./_components/Hero";
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
    </div>
  );
}
