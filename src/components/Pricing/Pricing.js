export default function Pricing() {
  return (
    <div className="flex flex-col items-center px-6 py-10 mx-auto w-full bg-[#1f441e] text-white font-outfit">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-yellow-400">GREEN FARMHOUSE</h1>
        <p className="mt-2 text-sm text-[#f4e7a1]">Dariyabad-Safdarganj Rd Aulia Lalpur, Uttar Pradesh 225206</p>
        <h2 className="mt-6 text-2xl font-bold text-yellow-300">PRICE LIST</h2>
      </div>

      {/* Price Table */}
      <div className="w-full border-2 border-yellow-400 rounded-xl overflow-hidden bg-[#295229]">
        <div className="grid grid-cols-2 text-center bg-yellow-400 text-black font-bold text-sm py-3">
          <div>PLOT TYPE SIZE (SQ. FT.)</div>
          <div>RATE/SQ. FT.</div>
        </div>

        <div className="grid grid-cols-2 text-sm text-white divide-y divide-yellow-300">
          <div className="p-4">
            <p className="font-bold">Delux</p>
            <p>10,000 sq. 1 Bedroom + 1 Kitchen + 1 Bathroom</p>
          </div>
          <div className="p-4 flex items-center justify-center text-lg text-yellow-300">
            650 /per sq. ft
          </div>

         {/*  <div className="p-4">
            <p className="font-bold">Premium</p>
            <p>10,000 sq. ft (2BHK) Premium, Fully Furnished, Pool, 2 Orchards</p>
          </div> */}
         {/*  <div className="p-4 flex items-center justify-center text-lg text-yellow-300">
            640 /per sq. ft
          </div> */}
        </div>
      </div>

      {/* Custom Build Info */}
      <p className="mt-4 text-sm text-center text-[#e6d791]">
        Custom Build As required. Fully personalized as per client need – <strong>On Request</strong>
      </p>

      {/* Payment Schedule */}
      <div className="w-full mt-10 bg-[#295229] border-2 border-yellow-400 rounded-xl p-6 text-sm">
        <h3 className="text-yellow-300 text-xl w-full flex justify-center items-center font-semibold mb-4">Payment Schedule </h3>
        <ul className="space-y-1 text-white ml-auto mr-auto flex flex-col items-center justify-center">
          <li>Booking ............................................ : 10%</li>
          <li>Within 30 Days ................................. : 15%</li>
          <li>Within 60 Days ................................ : 20%</li>
          <li>Within 90 Days ................................ : 25%</li>
          <li>Within 120 Days ............................... : 15%</li>
          <li>Within 150 Days ............................... : 15%</li>
        </ul>
      </div>

      {/* Extra Info */}
      <p className="mt-6 text-sm text-[#f2f2a2] text-center">
        PLC 10 /per sq. ft (<strong>If Applicable</strong>) &nbsp; | &nbsp; Development Charges 20 /per sq. ft
      </p>
      <p className="text-xs mt-2 text-[#ddd] text-center">
        <strong>Note:</strong> All prices exclude taxes. Subject to availability and final design.
        <br />
        Delivery in <strong>5 months</strong>.
      </p>

      {/* Footer Badges */}
     {/*  <div className="flex justify-between w-full mt-6 px-6 max-sm:flex-col max-sm:gap-3">
        <div className="flex items-center gap-2 text-yellow-300">
          <span className="text-xs font-bold">VERIFIED BY</span>
          <div className="bg-[#d4af37] text-black px-3 py-1 text-xs rounded">GOLDESTATES</div>
        </div>
        <div className="text-orange-400 font-semibold text-xs">POWERED BY CLAN Business</div>
      </div> */}
    </div>
  );
}
