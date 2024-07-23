import OpeningSection from "../components/Important/OpeningSection";
import HeroSection from "../components/Important/HeroSection";
import CallToAction from "../components/Important/CallToAction";
import FeaturedSection from "../components/Info/FeaturedSection";
import FeaturedSection2 from "../components/Info/FeaturedSection2";
import FeaturedSection3 from "../components/Info/FeaturedSection3";
import NumberStats from "../components/Info/NumberStats";
import PricingTable from "../components/Pricing/SimplePricingTable.jsx";
import SinglePricingTable from "../components/Pricing/SinglePricingTable.jsx";
import NewsletterSection from "../components/Extras/NewsletterSection";
import Features from "../components/Info/Features";
import ContactUsForm from "../components/Extras/ContactUsForm";
import Footer from "../components/Footer/Footer";
import Frequently from "../components/Important/Frequently.jsx";
import Hotkey from "../components/Extras/Hotkey";
import Testimanual from "../components/Extras/Testimanual";
import PriceTable2 from "../components/Pricing/DynamicPricingTable.jsx";
import Steps from "../components/Extras/Steps";
import Feta from "../components/Info/FeaturedSectionDynamic";
import ScrollInfo from "../components/Info/ScrollInfo";
import Estimates from "../components/Info/Estimates";
import Testimonial2 from "../components/Extras/Testimonial2";
import Testimonial3 from "../components/Extras/Testimonial3";

export default function AllComponents() {
  // Please comment out and import the components you wish to use / not use here
  return (
    <>
      <HeroSection />
      <OpeningSection />
      <Hotkey />
      <FeaturedSection />
      <FeaturedSection2 />
      <FeaturedSection3 />
      <Feta />
      <Steps />
      <CallToAction />
      <ScrollInfo />
      <Estimates />
      <PricingTable />
      <PriceTable2 />
      <SinglePricingTable />
      <NumberStats />
      <NewsletterSection />
      <Features />
      <ContactUsForm />
      <Testimanual />
      <Testimonial2 />
      <Testimonial3 />
      <Frequently />
      <Footer />
    </>
  );
}
