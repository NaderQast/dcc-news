import React from "react";

const Contact = () => {
  return (
    <section
      className="relative min-h-screen py-20 flex  items-center justify-center overflow-hidden"
      dir="rtl"
    >
      {/* 1. الخلفية المموهة (Background with Blur) */}
      <div className="absolute inset-0 z-0">
        {/* استخدام scale-110 لمنع ظهور حواف بيضاء بسبب التمويه */}
        <div className="absolute inset-0 bg-[url('/Damas-bg.jpg')] bg-cover bg-center blur-xs scale-110"></div>
        {/* طبقة لونية داكنة فوق الصورة لضمان وضوح النصوص البيضاء */}
        <div className="absolute inset-0 bg-indigo-950/70 mix-blend-multiply"></div>
      </div>

      {/* 2. المحتوى الرئيسي */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* الجانب الأيمن (الخريطة والعناوين) */}
          <div className="flex flex-col text-white order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-2">تفضل بزيارتنا</h2>
            <h3 className="text-xl mb-8 font-light text-slate-200">
              موقعنا على الخريطة
            </h3>

            {/* إطار الخريطة */}
            <div className="w-full h-[350px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <iframe
                title="موقع غرفة تجارة دمشق"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6575128038!2d36.301925776!3d33.50984037336785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7cfd62ef2cf%3A0x67a1180a1c599d44!2z2LrYsdmB2Kkg2KrYrNin2LHYqSDYr9mF2LTZgg!5e0!3m2!1sar!2s!4v1712910000000!5m2!1sar!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* الجانب الأيسر (نموذج الاتصال) */}
          <div className="flex flex-col order-1 lg:order-2 py-8">
            <h2 className="text-3xl font-bold mb-8 text-white lg:text-center text-right">
              مقترحات و شكاوي
            </h2>

            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* الاسم الكامل - يأخذ العرض كاملاً */}
              <div className="sm:col-span-2">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full bg-white/95 text-slate-800 placeholder-slate-400 px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all shadow-lg"
                  required
                />
              </div>

              {/* رقم المحمول */}
              <div>
                <input
                  type="tel"
                  placeholder="رقم المحمول"
                  className="w-full bg-white/95 text-slate-800 placeholder-slate-400 px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all shadow-lg"
                  required
                  dir="rtl"
                />
              </div>

              {/* البريد الإلكتروني */}
              <div>
                <input
                  type="email"
                  placeholder="البريد الالكتروني"
                  className="w-full bg-white/95 text-slate-800 placeholder-slate-400 px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all shadow-lg"
                  required
                />
              </div>

              {/* حقل الرسالة - حواف دائرية تتناسب مع مساحة النص */}
              <div className="sm:col-span-2">
                <textarea
                  placeholder="المقترح"
                  rows="5"
                  className="w-full bg-white/95 text-slate-800 placeholder-slate-400 px-6 py-5 rounded-[30px] focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all shadow-lg resize-none"
                  required
                ></textarea>
              </div>

              {/* زر الإرسال */}
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1e61ad] hover:bg-[#154a85] active:scale-[0.98] text-white font-bold text-lg py-4 rounded-full transition-all shadow-lg cursor-pointer"
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
