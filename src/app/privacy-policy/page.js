"use client"
import HeaderNew from "@/components/HeaderNew/HeaderNew";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";

export default function PrivacyPolicyPage() {

     useEffect(()=>{
    
            scrollTo(0,0)
    
        },[])


  return (
    <>
      <HeaderNew />
      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800 leading-relaxed mt-[91px]">
        <h1 className="text-2xl mb-2">Privacy Policy</h1>
        <p className="text-base mb-6">Effective Date: 08/07/2025</p>

        <p className="text-base mb-6">
          At Goldestates, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our landing page for the farmhouse located in Lucknow, Uttar Pradesh.
          <br />
          By accessing or using this website, you agree to the terms of this Privacy Policy.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-lg mb-1">1. Information We Collect</h2>
            <p className="text-base">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 text-base">
              <li>Fill out our contact or inquiry form</li>
              <li>Subscribe to updates</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="text-base mt-2">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-base">
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Location (City/State)</li>
              <li>Any additional information you choose to provide</li>
            </ul>
            <p className="text-base mt-2">
              We may also collect non-personal information such as browser type, IP address, device information, and referring URLs for analytical purposes.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-1">2. How We Use Your Information</h2>
            <p className="text-base">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-base">
              <li>Contact you regarding the farmhouse or related properties</li>
              <li>Respond to your inquiries and provide support</li>
              <li>Improve our website and marketing efforts</li>
              <li>Send you promotional content, if opted in</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg mb-1">3. Sharing of Information</h2>
            <p className="text-base">
              We do not sell, rent, or lease your personal information. We may share your data with:
            </p>
            <ul className="list-disc pl-6 text-base">
              <li>Trusted service providers who assist in marketing, hosting, or analytics</li>
              <li>Law enforcement or government authorities when required by law</li>
            </ul>
            <p className="text-base mt-2">
              All such third parties are required to maintain the confidentiality of your information.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-1">4. Data Security</h2>
            <p className="text-base">
              We use industry-standard measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
              <br />
              However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-1">5. Your Rights and Choices</h2>
            <p className="text-base">
              You may:
            </p>
            <ul className="list-disc pl-6 text-base">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt-out of marketing communications at any time</li>
            </ul>
            <p className="text-base mt-2">
              To exercise these rights, please contact us at <span className="underline">info@goldestates.in</span>.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-1">6. Cookies and Tracking Technologies</h2>
            <p className="text-base">
              We may use cookies or similar technologies to enhance user experience and gather website analytics. You can manage cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-1">7. Third-Party Links</h2>
            <p className="text-base">
              Our website may contain links to other websites. We are not responsible for the content or privacy practices of those sites.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-1">8. Changes to This Privacy Policy</h2>
            <p className="text-base">
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-lg mb-1">9. Contact Us</h2>
            <p className="text-base">
              If you have any questions about this Privacy Policy or our practices, please contact:
            </p>
            <p className="text-base mt-2">
              Goldestates<br />
              A-49, Engine House, Mohan Industrial Estate, Mathura Road, New Delhi, India (11004)<br />
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
