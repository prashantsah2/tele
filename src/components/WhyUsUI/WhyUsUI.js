import React from "react";

const WhyUsUI = ({ tag, heading, subheading, features }) => {
  return (
    <section className="py-16 px-4 bg-[#f7f7e5] w-full">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium border border-gray-300 rounded-full">
            {tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-gray-600">{subheading}</p>
        </div>

        {/* Right Side - Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#fff] p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="font-semibold text-gray-800">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsUI;
