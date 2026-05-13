import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Hori from "../components/Hori"
import Ints from "./ints"
import Foryou from "./foryou"
import Square from "../solution/square"
import Art from "../webdevser/art"
import Cursol from "../webdevser/cursol"
import Boxes from "../webdevser/boxes"
import Footer from "../components/Footer"  
import Strong from "./strong"
import Fivs from "./fivs"

export default function Integration() {
    return (
        <>
            <Navbar />
            <Hero bgImage="/inte.png"/>
            <Hori />
            <Ints />
            <Foryou />
            <Fivs />
            <Cursol title="Industries We Transform" />
            <Boxes/>
            <Hori />
            <Strong />
            <Footer/>
        </>
    )
}