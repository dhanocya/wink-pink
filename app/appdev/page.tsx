import Navbar from "../components/Navbar";
import House from "../webdevser/house";
import Hori from "../components/Hori";
import Fea from "../webdevser/fea";
import Ibox from "../webdevser/ibox";
import Cursol from "../webdevser/cursol"
import Footer from "../components/Footer";
import Boxes from "../webdevser/boxes";
import Fivtwo from "./fivtwo";
import Cards from "./Cards";


export default function AppDev() {
  return (
    <>
      <Navbar />
      <House />
      <Hori />
      <Cards imgSrc="/evo.png"/>
      <Cards title="For Your Customers" imgSrc="/evoa.png"/>
      <Fivtwo />
      <Cursol title="Case Studies"/>
      <Boxes />
      <Fea />
      <Ibox />
      <Footer />
    </>
  );
}