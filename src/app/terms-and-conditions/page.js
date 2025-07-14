"use client"
import Footer from "@/components/Footer/Footer";
import HeaderNew from "@/components/HeaderNew/HeaderNew";
import { useEffect } from "react";

export default function TermsPage() {


     useEffect(()=>{
    
            scrollTo(0,0)
    
        },[])




  return (
   <>
   <HeaderNew/>
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800 leading-relaxed mt-[91px]">
      <h1 className="text-2xl mb-6">Terms & Conditions</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-lg mb-1">Information Accuracy</h2>
          <p>
            All information provided on this website is for general informational purposes only. While we strive to keep
            details accurate and up to date, we make no guarantees regarding the completeness or accuracy of the content.
          </p>
        </section>

        <section>
          <h2 className="text-lg mb-1">Property Availability</h2>
          <p>
            The availability of the farmhouse is subject to change without notice. Expressions of interest do not
            constitute a binding agreement or contract.
          </p>
        </section>

        <section>
          <h2 className="text-lg mb-1">No Legal Advice</h2>
          <p>
            This website does not constitute legal, financial, or property advice. Interested buyers are encouraged to
            conduct their own due diligence and consult with appropriate professionals.
          </p>
        </section>

        <section>
          <h2 className="text-lg mb-1">Limitation of Liability</h2>
          <p>
            We shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the
            use of this website or reliance on its content.
          </p>
        </section>

        <section>
          <h2 className="text-lg mb-1">External Links</h2>
          <p>
            If this website contains links to third-party websites, we are not responsible for the content or accuracy of
            those external sites.
          </p>
        </section>

        <section>
          <h2 className="text-lg mb-1">Intellectual Property</h2>
          <p>
            All text, images, and content on this site are the property of the site owner and may not be copied,
            reproduced, or used without permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg mb-1">Privacy</h2>
          <p>
            Any personal information submitted via contact forms or inquiries will be handled in accordance with our
            Privacy Policy and will not be shared without consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg mb-1">Modifications</h2>
          <p>
            We reserve the right to update or modify these Terms & Conditions at any time without prior notice.
          </p>
        </section>
      </div>
    </main>
    <Footer/>
   </>
  );
}
