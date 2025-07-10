const MissionSection = () => {
  const data = {
    tag: "Our Mission",
    heading: "We help people create and build wealth.",
    description:
      "We have marked our presence globally reaching over a million of website owners using our products.",
    imageSrc: "/image/25.png", // Replace this with your own image path
    items: [
      {
        number: "01",
        title: "OK Media Business Vision",
        description:
          "Great, consistent work means more than hours clocked. Dominating the industry is a top priority.",
      },
      {
        number: "02",
        title: "Our mission for sustainability",
        description:
          "We believe in growth that supports the environment and future generations.",
      },
      {
        number: "03",
        title: "Our mission for sustainability",
        description:
          "We believe in building with intention and responsibility.",
      },
    ],
  };

  return (
    <section className="w-full px-6 lg:px-16 py-20 bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-xs font-medium text-gray-500 uppercase mb-2 font-outfit">
            {data.tag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-black leading-tight mb-4 font-outfit">
            {data.heading}
          </h2>
          <p className="text-gray-600 mb-10">{data.description}</p>

          {/* Mission Items */}
          <div className="space-y-8">
            {data.items.map((item, index) => (
              <div key={index}>
                <p className="text-[#46f176] font-medium mb-1 font-outfit">
                  {item.number}
                </p>
                <h4 className="text-lg font-medium text-black">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full  rounded-xl overflow-hidden bg-gray-100">
          <img
            src={data.imageSrc}
            
            alt="Team discussion"
            className="w-full h-full object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
