import OpeningSection from "./components/Important/OpeningSection";
import CallToAction from "./components/Important/CallToAction";
import FeaturedSection from "./components/Info/FeaturedSection";
import FeaturedSection2 from "./components/Info/FeaturedSection2";
import FeaturedSection3 from "./components/Info/FeaturedSection3";
import NumberStats from "./components/Info/NumberStats";
import PricingTable from "./components/Pricing/SimplePricingTable";
import NewsletterSection from "./components/Extras/NewsletterSection";
import Features from "./components/Info/Features";
import ContactUsForm from "./components/Extras/ContactUsForm";
import Toast from "./components/Extras/Toast";
import Footer from "./components/Footer/Footer";
import Frequently from "./components/Important/Frequently.jsx";
import Hotkey from "./components/Extras/Hotkey";
import Testimanual from "./components/Extras/Testimanual";
import PriceTable2 from "./components/Pricing/DynamicPricingTable";
import Steps from "./components/Extras/Steps";
import Feta from "./components/Info/FeaturedSectionDynamic";
import ScrollInfo from "./components/Info/ScrollInfo";
import Estimates from "./components/Info/Estimates";
import FoundersNote from "./components/Extras/FoundersNote";
import StripePricingTable from "./components/Pricing/StripePricingTable";
import HeroSection from "./components/Important/HeroSection";

export default function Home() {
  // Please comment out and import the components you wish to use / not use here
  return (
    <>
      <HeroSection />
      {/* <OpeningSection /> */}
      {/* <Hotkey /> */}
      <FeaturedSection />
      <FeaturedSection2 />
      <FeaturedSection3 />
      {/* <Feta /> */}
      {/* <Steps /> */}

      {/* <ScrollInfo /> */}
      {/* <Estimates /> */}
      {/* <PricingTable /> */}
      {/* <NumberStats /> */}
      {/* <NewsletterSection /> */}
      <Features />
      {/* <PricingTable /> */}
      <PriceTable2 />
      {/* <Toast /> */}
      {/* <StripePricingTable /> */}
      {/* <ContactUsForm /> */}
      {/* <Testimanual /> */}
      <FoundersNote />
      <CallToAction />
      <Frequently />
      <Footer />
    </>
  );
}
