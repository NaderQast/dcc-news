import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  Newspaper,
  Users,
  Building2,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Edit3, Eye } from "lucide-react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stats = [
    { label: "الأعضاء المسجلين", value: "64,520", icon: Users },
    { label: "الأعضاء المجددين", value: "4,525", icon: Users },
    { label: "الخدمات المقدمة", value: "9,652", icon: Building2 },
    { label: "شهادات التصدير", value: "9,533", icon: Newspaper },
  ];

  const news = [
    {
      title: "غرفة تجارة دمشق تستقبل سفير المملكة الأردنية الهاشمية",
      category: "أبرز الأخبار",
      date: "تغطية خاصة",
      desc: "تأكيد على الأخوّة والتكامل الاقتصادي وإطلاق شراكات استراتيجية لدعم الإنتاج والاستثمار.",
      img: "https://news.dcc.sy/storage/news/2026/623286486_1350970467068135_5815223139187687840_n.jpg_1769699593.webp",
    },
    {
      title: "غسان سكر: أعمدة البناء الاقتصادي التشاركية والشفافية",
      category: "اقتصاد",
      date: "قبل يومين",
      desc: "الشفافية هي المفتاح الأساسي لتحقيق الكفاءة في أعمدة البناء الاقتصادي السوري الحديث.",
      img: "https://news.dcc.sy/storage/news/2026/622740694_1350213940477121_7236951661472694544_n.jpg_1769683270.webp",
    },
    {
      title: "د. ليلى السمان: اقتصاد سوق تنافسي بحوار وتكامل مستمر",
      category: "حوارات",
      date: "قبل 3 أيام",
      desc: "أهمية بناء اقتصاد سوق قادر على المنافسة من خلال التكامل بين القطاعين العام والخاص.",
      img: "https://news.dcc.sy/storage/news/2026/622553156_1350249590473556_7886192123139971328_n.jpg_1769683360.webp",
    },
    {
      title: "منذر البزرة: حماية الصناعة الوطنية أساس الميزان التجاري",
      category: "صناعة",
      date: "قبل 4 أيام",
      desc: "الميزان التجاري القوي يبدأ من حماية المنتج المحلي وتوفير بيئة صناعية آمنة.",
      img: "https://news.dcc.sy/storage/news/2026/622808935_1350255237139658_3403123884593075013_n.jpg_1769683430.webp",
    },
  ];

  // Quick Loop: 3 Seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === news.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [news.length]);

  return (
    <main className="flex-grow">
      {/* --- SLIDER HERO SECTION --- */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Right Side: Content */}
            <div
              key={currentIndex}
              className="animate-in fade-in slide-in-from-right-10 duration-700"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-amber-50 text-amber-700 border border-amber-100 text-sm font-bold mb-6">
                {news[currentIndex].category}
              </span>

              <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-6 text-primary transition-all">
                {news[currentIndex].title}
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed h-20 overflow-hidden">
                {news[currentIndex].desc ||
                  "تفاصيل الخبر وآخر التطورات الاقتصادية في غرفة تجارة دمشق..."}
              </p>

              <div className="flex items-center gap-6">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition shadow-lg shadow-emerald-100 cursor-pointer active:scale-95">
                  اقرأ التفاصيل
                  <ChevronLeft size={20} />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {news.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === i
                          ? "w-8 bg-emerald-600"
                          : "w-2 bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Left Side: Visual Slide */}
            <div className="hidden lg:block relative">
              <div
                key={currentIndex}
                className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-1000"
              >
                <img
                  src={news[currentIndex].img}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  alt="news highlight"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white font-medium text-sm">
                  {news[currentIndex].date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* --- LATEST NEWS GRID --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">
                أحدث الأخبار والفعاليات
              </h2>
              <p className="text-slate-500">
                ابق على اطلاع بآخر تحديثات الاقتصاد والأعمال
              </p>
            </div>
            <a
              href="#"
              className="hidden sm:flex text-emerald-600 font-bold items-center gap-1 hover:text-emerald-700 transition"
            >
              عرض كل الأخبار
              <ChevronLeft size={18} />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group relative cursor-pointer"
              >
                {/* 1. ADMIN OVERLAY: Visible only on Hover */}
                <div className="absolute inset-0 z-20 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <Link
                    to={`/edit-article/${index}`}
                    className="btn btn-circle btn-white border-none shadow-lg hover:scale-110 transition-transform"
                    title="تعديل المقال"
                  >
                    <Edit3 size={20} className="text-primary" />
                  </Link>
                  <button
                    className="btn btn-circle btn-white border-none shadow-lg hover:scale-110 transition-transform"
                    title="عرض المقال"
                  >
                    <Eye size={20} className="text-primary" />
                  </button>
                </div>

                {/* 2. IMAGE SECTION */}
                <div className="h-48 bg-slate-200 overflow-hidden relative">
                  <img
                    src={item.img}
                    className="w-full h-full object-contain  group-hover:scale-110 transition-transform duration-700"
                    alt={item.title}
                  />
                  {/* Category Badge stays on top of image but behind the hover overlay */}
                  <span className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* 3. CONTENT SECTION */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-slate-400 font-medium">
                      {item.date}
                    </p>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <h3 className="font-bold text-md text-primary leading-snug group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
