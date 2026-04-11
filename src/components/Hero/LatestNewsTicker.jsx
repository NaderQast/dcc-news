import React from "react";

const LatestNewsTicker = ({ news }) => {
  // 1. مضاعفة الأخبار لضمان وجود محتوى "خلف" المحتوى الحالي أثناء التمرير
  const scrollingNews = [...news, ...news];

  return (
    <div className="bg-white border-y border-slate-100 flex items-center h-16 overflow-hidden relative shadow-sm">
      {/* العنوان الثابت - يبقى فوق الأخبار */}
      <div className="absolute right-0 top-0 bottom-0 bg-[#FF6600] text-white px-8 flex items-center font-bold text-lg z-20 shadow-[-5px_0_15px_rgba(255,102,0,0.3)]">
        آخر الأخبار
      </div>

      {/* الحاوية المتحركة */}
      <div className="flex-1 overflow-hidden" dir="ltr">
        <div className="flex items-center animate-ticker-news hover:[animation-play-state:paused] cursor-pointer">
          {scrollingNews.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-12 border-l border-slate-200 whitespace-nowrap group"
              dir="rtl"
            >
              {/* العنوان */}
              <span className="text-primary font-bold text-md group-hover:text-[#FF6600] transition-colors duration-300">
                {item.title}
              </span>
              {/* التاريخ */}
              <span className="text-slate-400 text-sm font-medium ml-4 font-sans mx-4">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNewsTicker;
