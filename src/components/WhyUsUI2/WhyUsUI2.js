import React from "react";

const WhyUsUI2 = ({ heading, description, imageSrc, features }) => {
  return (
    <section className="bg-[#f7f7e5] py-16 px-4 md:px-12">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-outfit text-gray-900 mb-6 leading-tight">
          {heading}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">{description}</p>

        <div className="rounded-xl overflow-hidden shadow-lg mb-8">
          <img
            src={imageSrc}
            alt="Perfume Packaging"
            className="w-full object-cover"
          />
        </div>

       {/*  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#fff] py-6 px-4 rounded-lg shadow-sm"
            >
              <div className="text-3xl mb-2 text-purple-700">{feature.icon}</div>
              <p className="text-sm font-medium text-gray-800 text-center">
                {feature.title}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default WhyUsUI2 ;
