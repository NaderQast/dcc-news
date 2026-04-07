import React, { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

// REPLACE THIS WITH YOUR KEY FROM EXCHANGERATE-API.COM
const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

const CurrencyTicker = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);

  const symbols = ["USD", "EUR", "GBP", "TRY", "SAR", "AED", "KWD", "JOD"];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
        );
        const data = await response.json();

        if (data.result === "success") {
          const formatted = symbols.map((s) => ({
            symbol: s,
            rate: data.conversion_rates[s].toFixed(2),
            // Simulated change logic
            isUp: Math.random() > 0.4,
            change: (Math.random() * 0.5).toFixed(2),
          }));
          setRates(formatted);
        }
      } catch (error) {
        console.error("Ticker Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  if (loading || rates.length === 0)
    return <div className="h-10 bg-slate-900" />;

  // IMPORTANT: Duplicate the array to create the infinite effect
  const duplicatedRates = [...rates, ...rates];

  return (
    <div className="bg-slate-900 border-b border-white/10 overflow-hidden py-2 relative flex items-center">
      {/* Label - Absolute so it stays on top while text slides under */}
      <div className="absolute left-0 top-0 bottom-0 z-10 bg-emerald-600 text-white px-4 flex items-center font-bold text-[10px] shadow-lg">
        أسعار العملات العالمية
      </div>

      {/* The Animated Container */}
      <div className="animate-ticker flex items-center">
        {duplicatedRates.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 px-10 border-r border-white/5 whitespace-nowrap"
          >
            <span className="text-white font-bold text-xs">{item.symbol}</span>
            <span className="text-slate-400 font-mono text-xs">
              {item.rate}
            </span>
            <div
              className={`flex items-center gap-1 text-[10px] font-bold ${
                item.isUp ? "text-emerald-400" : "text-rose-500"
              }`}
            >
              {item.isUp ? (
                <TrendingUp size={12} />
              ) : (
                <TrendingDown size={12} />
              )}
              {item.change}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyTicker;
