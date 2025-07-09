"use client";
import React from "react";
import { useState } from "react";

export default function QuestionsSet() {
  const questions = [
    {
      title: "What is React?",
      answer: (
        <p>React is a JavaScript library for building user interfaces.</p>
      ),
    },
    {
      title: "What is Tailwind CSS?",
      answer: (
        <p>
          Tailwind CSS is a utility-first CSS framework for rapidly building
          custom designs.
        </p>
      ),
    },
    {
      title: "What is Next.js?",
      answer: (
        <div>
          <p>
            Next.js is a React framework for building server-side rendered and
            static web applications.
          </p>
          <p>
            Next.js is a React framework for building server-side rendered and
            static web applications.
          </p>
          <p>
            Next.js is a React framework for building server-side rendered and
            static web applications.
          </p>
          <p>
            Next.js is a React framework for building server-side rendered and
            static web applications.
          </p>
          <p>
            Next.js is a React framework for building server-side rendered and
            static web applications.
          </p>
          <p>
            Next.js is a React framework for building server-side rendered and
            static web applications.
          </p>
        </div>
      ),
    },
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
                <div className="font-outfit text-4xl text-[#2b2b2bda]">
                  {item.title}
                </div>
              </div>

              <div
                className={`flex font-outfit ml-12 mt-4 overflow-hidden transition-all duration-300 ${
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
