"use client";
import { useState } from "react";
import ReusablInput from "../../components/ReusableInput/ReusableInut";
import HeaderNew from "@/components/HeaderNew/HeaderNew";

import QuestionsSet from "@/components/QuestionsComp/QuestionSet";
import Footer from "@/components/Footer/Footer";
import GetinTouch from "@/components/GetinTouch/GetinTouch";
import { Checkbox } from "@material-tailwind/react";
import ButtonMain2 from "@/components/ButtonMain/ButtonMain";
import ButtonMain from "@/components/ButtonComp/ButtonComp";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactUs = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (result.ok) {
        const data = await result.json();
        alert("Contact form submitted successfully!");
      } else {
        console.error("Error:", result.statusText);
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
    }
  };

  return (
    <>
      <HeaderNew />
      <div className="w-full flex flex-col justify-center items-center pt-12 bg-[#e3bb09]">
        <div className="flex flex-col justify-center items-center max-w-[1441px] w-full px-12 ">
          <div className="w-full flex flex-row justify-start items-start bg-[#faffdd] py-8 px-8 rounded-lg mt-12">
            <div className="flex flex-col justify-start items-start w-[50%]">
              <div className="w-full flex flex-col justify-start items-start max-w-[471px]">
                <ReusablInput
                  label={"Name"}
                  value={name}
                  setValue={setName}
                  placeholder={"enter name here..."}
                />
              </div>

              <div className="w-full flex flex-col justify-start items-start max-w-[471px] mt-6">
                <ReusablInput
                  label={"Email or Phone Number"}
                  value={email}
                  setValue={setEmail}
                  placeholder={"enter email here..."}
                />
              </div>

              <div className="w-full flex flex-col justify-start items-start max-w-[471px] mt-6">
                <ReusablInput
                  label={"Your Message"}
                  value={message}
                  setValue={setMessage}
                  placeholder={"enter email here..."}
                />
              </div>

              <div className="w-full flex flex-row justify-start items-start max-w-[471px] mt-6 ml-[-11px]">
                <Checkbox className="p-0 pl-[-22px]" />
                <p className="text-outfit text-[#333] text-sm leading-4 mt-2">
                  I agree to terms and conditions and i agree for my data to be
                  used for personalised ads
                </p>
              </div>

              <div>
                <div className="w-[231px] py-2 ml-1 px-4 text-md text-[#383838] font-outfit bg-[#2df6a2] mt-4 flex justify-center rounded-[41px] cursor-pointer"
                onClick={handleContactUs} 
                >
                  contact
                </div>
              </div>
            </div>

            <Image
              src={"/image/contact.jpg"}
              alt="Rainnee Logo"
              width={198}
              height={50}
              className="object-contain cursor-pointer mt-6 w-[491px] ml-10"
              style={{ marginRight: "auto", marginLeft: -51 }}
            />
          </div>

          <div className="w-full">
            <div className="text-2xl font-outfit mt-12">
              {`Let's get in Touch`}
            </div>
            <GetinTouch />
          </div>

          <div className="w-full">
            <div className="text-2xl font-outfit mt-12">{`FAQ's`}</div>
            <QuestionsSet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
