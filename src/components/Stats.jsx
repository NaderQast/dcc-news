import React from "react";
import { Newspaper, Users, Building2 } from "lucide-react";
const Stats = () => {
  const stats = [
    { label: "الأعضاء المسجلين", value: "64,520", icon: Users },
    { label: "الأعضاء المجددين", value: "4,525", icon: Users },
    { label: "الخدمات المقدمة", value: "9,652", icon: Building2 },
    { label: "شهادات التصدير", value: "9,533", icon: Newspaper },
  ];

  return (
    <div>
      {/* --- STATISTICS SECTION --- */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all border border-slate-100 group"
              >
                <div className="inline-flex p-4 rounded-full bg-emerald-50 text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={28} />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
