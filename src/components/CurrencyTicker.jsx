import React from "react";
import DivergenceTicker from "./DivergenceTicker";

const CurrencyTicker = () => {
  // We define the source URL for the exchangerates.org.uk widget
  // mc=USD (Base currency)
  // vcu=008000 (Green for Up)
  // vcd=FF0000 (Red for Down)
  const tickerUrl =
    "//www.exchangerates.org.uk/widget/ER-LRTICKER.php?w=1280&s=2&mc=USD&mbg=FFFFFF&bs=no&bc=FFFFFF&f=verdana&fs=11px&fc=333333&lc=000044&lhc=FE9A00&vc=FE9A00&vcu=008000&vcd=FF0000&";

  return (
    <div className="w-full bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex items-center">
        {/* Optional: Static Label to match your theme */}
        <div
          className="hidden md:flex shrink-0 bg-emerald-900 text-white px-4 h-[30px] items-center text-[10px] font-bold z-10 shadow-md
            border border-slate-200
        "
        >
          أسعار العملات العالمية
        </div>

        {/* The iFrame Widget */}
        <div className="flex-1 h-[30px]">
          <iframe
            src={tickerUrl}
            width="100%"
            height="30"
            frameBorder="0"
            scrolling="no"
            marginWidth="0"
            marginHeight="0"
            title="Live Currency Rates"
            className="grayscale-[0.2] contrast-[1.1]"
          ></iframe>
        </div>
      </div>
      <DivergenceTicker />
    </div>
  );
};

export default CurrencyTicker;
