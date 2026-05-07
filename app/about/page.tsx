import Navbar from "../components/Navbar";
import Main from "./main"
import Line from "../components/Line";
import Sectwo from "./sectwo";
import Set from "./set"
import Secfiv from "./secfiv";
import Secsix from "./secsix";
import Seceig from "./seceig";
import Art from "../webdevser/art";
import Team from "./team";
import Footer from "../components/Footer";


export default function About() {
    return (
        <>
            <Navbar />
            <Main/>
            <Line />
            <Sectwo />
            <Set />
            <Art title={"The people behind the work"} />
            <Team />
            <Secfiv />
            <Secsix />
            <Seceig />

            <Footer />
        </>
    );
}