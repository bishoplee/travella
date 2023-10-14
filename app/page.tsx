import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";

export default function Home() {
  return (
    <>
      <Hero />
      <Locations />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}
