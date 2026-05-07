import Navbar from "../components/Navbar";
import House from "./house";
import Hori from "../components/Hori";
import Tssystem from "./tssystem";
import CustomerSide from "./customerside";
import Philosophy from "./philosophy";
import Fea from "./fea";
import Ibox from "./ibox";
import Art from "./art";
import Cursol from "./cursol";
import Footer from "../components/Footer";
import Boxes from "./boxes";


export default function WebDevSer() {
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