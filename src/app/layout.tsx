import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green Farm House",
  description:
    'Experience the ultimate luxury and comfort in our green farmhouse.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        {/* Custom fonts moved to _document.tsx */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>

      </head>
      <body className={roboto.className}>
        
        <Layout>
          {children}
       
        </Layout>
         <div style={{ position: "fixed", bottom: "99px", right: "40px", zIndex: 1000,boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)", borderRadius: "51%",cursor: "pointer", padding: "10px" }}>
          <a href="callto:919818793773" target="_blank">
           <Image src={"/image/call icon.png"} alt="whatsapp" width={41} height={41} className="object-cover rounded-full" />

          </a>
          
       </div>

        <div style={{ position: "fixed", bottom: "40px", right: "40px", zIndex: 1000,boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "50%",cursor: "pointer", padding: "10px" }}>
          
           <a href="https://wa.me/919818793773" target="_blank">
         <Image src={"/image/whatsapp.png"} alt="whatsapp" width={41} height={41} className="object-cover" />
        
        </a>
       </div>
      </body>
    </html>
  );
}
