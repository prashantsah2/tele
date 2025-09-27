import React from "react";

import Header3 from "@/components/Header3/Header3";
import Footer2 from "@/components/Footer2/Footer2";
import PPC from "@/components/PPC/PPC"




export default function page() {





return(
<>
<Header3 />
<div className="flex flex-col min-h-screen bg-primarybg pt-20"
>
    <PPC/>
</div>

<Footer2 />
</>
)


}
