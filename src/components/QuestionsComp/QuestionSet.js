"use client";
import { title } from "process";
import React, { useEffect } from "react";
import { useState } from "react";

export default function QuestionsSet() {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);


  const questions = [
    {
      title: `Are these farmhouses suitable for weekend getaways or permanent living?`,
      answer: (
        <p>{`Yes, they’re perfect for both. Whether you're looking for a weekend escape, a holiday home, or a nature-rich permanent residence, our farmhouses are fully equipped to meet your needs.`}</p>
      ),
    },
    {
      title: `What amenities do you offer?`,
      answer: (
        <p>
         {` Our farmhouses come with modern amenities like:`}
          <ul>
            <li>Private gated access</li>
            <li>Water and electricity connections</li>
            <li>Road access & fencing</li>
            <li>Landscaping and plantation</li>
            <li>Optional swimming pool, gazebo, or farmhouse villa construction</li>
            <li> Private Swimming Pool</li>
            <li>1bedroom + 1 Kitchen + 1Toilet</li>
            <li>2 Orchards</li>
            <li>Lush Green Lawn</li>
            <li>Children’s Play Zone</li>
          </ul>
        </p>
      ),
    },
    {
      title: `Is the land legally verified?`,
      answer: (
        <div className="flex flex-row text-md font-outfit">
          <p>
     {`       Yes. All properties are 100% verified with proper land titles, ownership documents, and legal clearances to ensure a secure purchase.`}
          </p>
        </div>
      ),
    },

    {
      title: `Can I build my own farmhouse villa on the land?`,
      answer: (
        <div className="flex flex-row text-md font-outfit">
          <p>
            {`       Definitely. You can custom-build your dream villa or we can help you with turnkey construction as per your preferences.`}
          </p>
        </div>
      ),
    },{
      title: `How can I visit the farmhouse site?`,
      answer: (
        <div className="flex flex-row text-md font-outfit">
          <p>
          {`  You can book a free site visit with us. Our team will arrange a guided tour and provide you with all necessary details.`}
          </p>
        </div>
      ),
    },
    {
      title: `How do I book or reserve a plot/farmhouse?`,
      answer: (
        <div className="flex flex-row text-md font-outfit">
          <p>
            Booking is simple. Just contact us via the website or call us directly. We’ll guide you through the documentation, site visit, and token/booking process.
          </p>
        </div>
      ),
    }
  ];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-6 mb-12">
      {questions.map((item) => {
        return (
          <div
            key={item.title}
            className="flex w-full items-center justify-start border-b-[1px] border-[#2222225d] mb-2 py-6"
          >
            <div className="flex flex-col w-full justify-start items-start">
              <div className="flex justify-start items-center">
                <div
                  className="w-[21px] mr-6 cursor-pointer"
                  onClick={() =>
                    setOpenIndex(
                      openIndex === questions.indexOf(item)
                        ? null
                        : questions.indexOf(item)
                    )
                  }
                >
                  <svg
                    width="32"
                    height="31"
                    viewBox="0 0 162 162"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform duration-300 ${
                      openIndex === questions.indexOf(item) ? "rotate-45" : ""
                    }`}
                  >
                    <rect width="162" height="162" rx="81" fill="#EDEDED" />
                    <path
                      d="M81 48V114"
                      stroke="#6D6D6D"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M114 81L47 81"
                      stroke="#6D6D6D"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="font-outfit text-4xl text-[#2b2b2bda] max-sm:text-[17px] max-sm:leading-4 max-sm:py-2">
                  {item.title}
                </div>
              </div>

              <div
                className={`flex font-outfit ml-12 mt-4 overflow-hidden transition-all duration-300 max-md:text-[21px] max-sm:text-[18px] ${
                  openIndex === questions.indexOf(item)
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
