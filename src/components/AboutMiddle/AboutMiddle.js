const MissionSection = () => {
  const data = {
    tag: "Our Mission",
    heading: "To create a global community of luxury farmhouse owners",
    description:
      "We aim to transform living by offering exclusive, nature-integrated farmhouses that provide a serene escape from urban life. Our mission is to create a global community of like-minded individuals who value peace, privacy, and premium living in the lap of nature.",
    imageSrc: "/image/de83a092-b1b5-4367-9794-6e3e71e32239.jpeg", // Replace this with your own image path
    items: [
      {
        number: "01",
        title: "What makes your farmhouse different from others?",
        description:
          "Our farmhouse stands out for its luxurious design, prime location, and nature-integrated lifestyle. It’s not just land — it’s a serene retreat that offers peace, privacy, and premium living, all in one place.",
      },
      {
        number: "02",
        title: "Where is the farmhouse located?",
        description:
          "Our farmhouses are located in carefully chosen, high-value areas close to major cities like Delhi, Gurgaon, Mumbai, and Bangalore — offering both convenience and countryside charm.",
      },
      {
        number: "03",
        title: "Is this farmhouse good for investment?",
        description:
          "Absolutely. Our properties offer strong land appreciation, legal verification, and high resale/rental demand — making them ideal for both personal use and long-term investment.",
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
