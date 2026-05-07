import Navbar from "../components/Navbar";
import House from "../webdevser/house";
import Hori from "../components/Hori";
import Tssystem from "../webdevser/tssystem";
import CustomerSide from "../webdevser/customerside";
import Philosophy from "../webdevser/philosophy";
import Fea from "../webdevser/fea";
import Ibox from "../webdevser/ibox";
import Art from "../webdevser/art";
import Cursol from "../webdevser/cursol"
import Footer from "../components/Footer";
import Boxes from "../webdevser/boxes";


export default function AppDev() {
  return (
    <>
      <Navbar />
      <House />
      <Hori />
      <Tssystem />
      <CustomerSide />
      <Philosophy />
      <Art title="Case Studies"/>
      <Cursol />
      <Boxes />
      <Fea />
      <Ibox />
      <Footer />
    </>
  );
}