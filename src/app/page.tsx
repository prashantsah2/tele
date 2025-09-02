import Hero2 from "@/components/Hero2/Hero2";
import OurProjects from "@/components/OurProjects/OurProjects";
import Static11 from "@/components/Static11/Static11";
import OurProjects2 from "@/components/OurProjects2/OurProjects2";
import BentoSet2 from "@/components/BentoSet2/BentoSet2";
import Footer2 from "@/components/Footer2/Footer2";
import Header3 from "@/components/Header3/Header3";

export default function Campaign() {
  return (
    <>
      {/* <HeaderNew/> */}
      <Header3 />
      <Hero2 />

      <div className="w-full flex justify-center items-center flex-col bg-[#0906bd]">
        <Static11 />
        <OurProjects2 />
       {/*  <BentoSet2/> */}
      </div>

      <Footer2/>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
    </>
  );
}
