import React from 'react';

const StaticComp9 = ({ title, description, points }) => {
  return (
    <div className="w-full bg-[#f7f7e5] py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((point, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
            {/* Icon/Image placeholder */}
            <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">{point.title}</h4>
            <p className="text-sm text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticComp9;
