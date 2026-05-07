import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Line from "../components/Line"
import ProcessBlueprint from "../components/ProcessBlueprint"
import Clip from "../webdevser/clip"
import CapabilitiesSection from "../components/Capabilitieas"
import RatingCard from "../components/RatingCard"
import Cta from "../components/Cta"
import Footer from "../components/Footer"

export default function portfolio() {
    return (
        <>
            <Navbar />
            <Hero />
            <Line />
            <ProcessBlueprint />
            <Clip />
            <CapabilitiesSection />
            <RatingCard />
            <Cta />
            <Footer />
        </>
    )
}