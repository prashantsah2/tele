const AboutHero = () => {
  return (
    <section className="w-full px-6 lg:px-16 py-20 bg-white mt-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <h1 className="text-[2.5rem] sm:text-[4rem] font-outfit font-medium text-[#333] leading-none mb-6">
          Our FarmHouse Story
        </h1>

        {/* Top captions */}
        <div className="flex flex-wrap justify-between text-xs sm:text-sm text-gray-600 mb-12">
          <span>Protecting water ensures future</span>
          <span>Water sustains life, ecosystems</span>
          <span>Water symbolizes purity, renewal</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Image 1 */}
          <div className="w-full aspect-[4/3] bg-gray-200 rounded-md overflow-hidden">
            <img
              src="/image/25.png"
              alt="Tile Detail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="w-full aspect-[4/3] bg-gray-200 rounded-md overflow-hidden md:col-span-1">
            <img
              src="/image/25.png"
              alt="Fittings"
              className="w-full h-full object-cover"
            />
          </div>
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-md overflow-hidden md:col-span-1">
            <img
              src="/image/25.png"
              alt="Fittings"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Optional caption below images */}
        <p className="mt-6 text-sm text-gray-500 italic">
          where art and awareness converge, inspiring conversations
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
