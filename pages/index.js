// ==============================================
import React from "react";
import NavbarStyleThree from "@/components/_App/NavbarStyleThree";
import MainBanner from "@/components/HomeThree/MainBanner/MainBanner";
import PartnerSlider from "@/components/Common/PartnersTwo/PartnerSlider";
import AboutCompany from "@/components/HomeThree/AboutCompany/AboutCompany";
import FunFact from "@/components/Common/FunFactTwo/FunFact";
import WhyChooseUs from "@/components/HomeThree/WhyChooseUs/WhyChooseUs";
import ServiceSlider from "@/components/Services/ServiceSliderStyle2/ServiceSlider";
import AppointmentForm from "@/components/Appointment/AppointmentStyle3/AppointmentForm";
import OurTeam from "@/components/Common/OurTeam/OurTeam";
import CaseStudiesSlider from "@/components/CaseStudies/CaseStudiesStyle3/CaseStudiesSlider";
import PricingTable from "@/components/Pricing/PricingTable";
import HowCanWeHelp from "@/components/Common/HowCanWeHelp2/HowCanWeHelp";
import OurBlog from "@/components/Common/OurBlog/OurBlog";
import NewsletterForm from "@/components/Common/NewsletterForm/NewsletterForm";
import Footer from "@/components/_App/Footer";
import TechnologiesSlider from "@/components/Common/Technologies/TechnologiesSlider";
import ServicesSlider from "@/components/Common/Services/ServicesSlider";
import TestimonialSlider from "@/components/Common/Testimonials/TestimonialSlider";

const IndexPage = () => {
  return (
    <>
      <NavbarStyleThree />

      <MainBanner />

      <div className="ptb-100">
        {/* <PartnerSlider /> */}
        <TechnologiesSlider />
      </div>

      <AboutCompany />

      {/* <div className="ptb-100">
        <FunFact />
        <ServicesSlider />
      </div> */}

      <WhyChooseUs />
      
      <ServiceSlider />

      {/* <OurTeam /> */}

      {/* <CaseStudiesSlider /> */}

      {/* <PricingTable /> */}

      <HowCanWeHelp />

      <div className="ptb-100">
        <PartnerSlider />
      </div>

      <div className="pb-100">
        <AppointmentForm />
      </div>

      <TestimonialSlider />

      <OurBlog />

      <NewsletterForm />


      {/* <Industry /> */}

      <Footer />
    </>
  );
};

export default IndexPage;
