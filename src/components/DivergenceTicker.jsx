import React, { useEffect, useState } from "react";

const DivergenceTicker = () => {
  const [tickerData, setTickerData] = useState([]);
  const [loading, setLoading] = useState(true);

  const assets = [
    { id: "bitcoin", label: "البيتكوين", symbol: "BTC" },
    { id: "ethereum", label: "الإيثيريوم", symbol: "ETH" },
    { id: "solana", label: "سولانا", symbol: "SOL" },
    { id: "gold", label: "الذهب", symbol: "XAU", isMetal: true },
    { id: "sp500", label: "S&P 500", symbol: "INX", isIndex: true },
    { id: "nasdaq", label: "Nasdaq", symbol: "IXIC", isIndex: true },
  ];

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const cryptoResponse = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true"
        );
        const cryptoData = await cryptoResponse.json();

        const fxResponse = await fetch(
          "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
        );
        const fxData = await fxResponse.json();

        const formatted = assets.map((asset) => {
          let price = 0;
          let change = 0;

          if (cryptoData[asset.id]) {
            price = cryptoData[asset.id].usd;
            change = cryptoData[asset.id].usd_24h_change || 0;
          } else if (asset.id === "gold") {
            price = 1 / fxData.usd.xau;
            change = 0.45;
          } else if (asset.isIndex) {
            price = asset.id === "sp500" ? 5420.15 : 18210.4;
            change = Math.random() * 1.2 * (Math.random() > 0.5 ? 1 : -1);
          }

          return {
            ...asset,
            price: price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
            isUp: change >= 0,
            change: Math.abs(change).toFixed(2),
          };
        });

        setTickerData(formatted);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
    const interval = setInterval(fetchMarketData, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading)
    return (
      <div className="h-[35px] bg-[#fcfcfc] border-b border-slate-200"></div>
    );

  const displayItems = [...tickerData, ...tickerData, ...tickerData];

  return (
    <div className="relative w-full bg-[#fcfcfc] border border-slate-200 h-[35px] flex items-center overflow-hidden">
      {/* الملصق الأخضر الثابت على اليمين */}
      <div
        className="absolute right-0 top-0 h-full bg-[#004d3d] text-white flex items-center px-4 z-20 font-bold text-[12px] shadow-[-2px_0_5px_rgba(0,0,0,0.2)] "
        dir="rtl"
      >
        أسعار المعادن والكريبتو
      </div>

      {/* الشريط المتحرك */}
      <div className="w-full h-full flex items-center" dir="ltr">
        <div className="animate-ticker-slide flex items-center">
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-10 font-sans text-[13px] whitespace-nowrap"
              style={{ fontFamily: "Verdana, sans-serif" }}
            >
              <span className="font-bold text-[#000044]">{item.label} =</span>

              <span
                className={`font-bold flex items-center gap-1.5 ${
                  item.isUp ? "text-[#008000]" : "text-[#FF0000]"
                }`}
              >
                {item.price}
                <span className="text-[10px] mt-0.5">
                  {item.isUp ? "▲" : "▼"}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DivergenceTicker;
