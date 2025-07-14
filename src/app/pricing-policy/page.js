"use client"
import HeaderNew from "@/components/HeaderNew/HeaderNew";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";

export default function PricingPolicyPage() {


    useEffect(()=>{
        //animated scroll up will be there
    
        scrollTo(0,0)

    },[])



  return (
    <>
      <HeaderNew />
      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800 leading-relaxed mt-[91px]">
        <h1 className="text-2xl mb-6">Pricing Policy</h1>

        <p className="text-base mb-6">
          At Goldestates, we believe in building trust through transparency and a customer-first approach. Please read our pricing terms carefully before proceeding. The farmhouse is trusted and verified by Goldestates.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-lg mb-1">Trusted & Verified by GoldEstates</h2>
            <p className="text-base">
              This farmhouse has been thoroughly verified and approved by GoldEstates, a trusted name in real estate due diligence. You can rest assured that:
            </p>
            <ul className="list-disc pl-6 text-base mt-2">
              <li>All legal documents are in order</li>
              <li>The property title is clear and authentic</li>
              <li>The site and amenities are exactly as shown</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg mb-1">No Advance Payment Required</h2>
            <p className="text-base">
              We do not ask for any advance or upfront payments. You are under no financial obligation when you inquire about or express interest in the farmhouse.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-1">Pay Only After Site Visit and Decision</h2>
            <p className="text-base">
              You are required to make any payment only if:
            </p>
            <ul className="list-disc pl-6 text-base mt-2">
              <li>You personally visit the site, and</li>
              <li>You decide to proceed with the purchase after being fully satisfied with the property</li>
            </ul>
            <p className="text-base mt-2">
              There are no hidden charges, registration fees, or booking amounts required in advance.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-1">Transparent Dealings</h2>
            <p className="text-base">
              We ensure:
            </p>
            <ul className="list-disc pl-6 text-base mt-2">
              <li>Full property disclosure</li>
              <li>Verified legal documents</li>
              <li>Honest pricing discussions only after you’ve visited the property</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg mb-1">No Commitment Until You Are Ready</h2>
            <p className="text-base">
              Until you confirm your interest after a site visit, there is:
            </p>
            <ul className="list-disc pl-6 text-base mt-2">
              <li>No booking required</li>
              <li>No payment or token money asked</li>
              <li>No pressure or obligation from our side</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg mb-1">Contact Us</h2>
            <p className="text-base">
              If you have any questions regarding this policy, please contact:
            </p>
            <p className="text-base mt-2">
              Goldestates<br />
              Email: info@goldestates.in<br />
              Phone: 7827831857
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
