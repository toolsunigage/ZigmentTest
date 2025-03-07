"use client";
import * as React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { LeadForm } from "./LeadForm";
import { FeatureSection } from "./FeatureSection";
import { ConversationDemo } from "./ConversationDemo";
import { BusinessImpact } from "./BusinessImpact";
import { ControlSection } from "./ControlSection";
import { Architecture } from "./Architecture";
import { Footer } from "./Footer";

export default function MacBookPro161() {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-gray-100">
      <section className="flex relative flex-col items-center self-stretch px-20 pt-14 w-full rounded-none min-h-[1424px] pb-[462px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b41b82edbb4cc9ecce3375d2ba8d2aa8bf3801444294bbf5e37ab55ab82ff9e?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-0 w-full max-w-[1415px] max-md:mb-2.5 max-md:max-w-full">
          <Navbar />
          <Hero />
          <LeadForm />
        </div>
      </section>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/11b9e0f24de3e444b666d856a839172b69f67f2849fbae3edda7fc8fa5a04bce?placeholderIfAbsent=true&apiKey=bdb75f79ebaf4d11862f559300b261e0"
        alt="Feature preview"
        className="object-contain z-10 mt-0 w-full aspect-[1.73] max-w-[1403px] rounded-[30px] max-md:mt-0 max-md:max-w-full"
      />
      <FeatureSection />
      <ConversationDemo />
      <BusinessImpact />
      <ControlSection />
      <Architecture />
      <Footer />
    </main>
  );
}
