import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
// Inside your Header component, find the button:

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. LEFT: Logo Section & Mobile Menu Button */}
          <div className="flex-1 flex items-center justify-start gap-3">
            {/* Mobile Menu Button - Stays on the far left */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 p-2 hover:bg-slate-100 rounded-full transition cursor-pointer"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Logo Group */}
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-90 transition"
            >
              {/* Replaced the div with the actual img tag */}
              <img
                src={Logo}
                alt="Damascus Chamber of Commerce Logo"
                className="w-14 h-14 object-contain shrink-0"
              />

              <div className="hidden sm:block text-left space-y-1">
                <h1 className="text-xl font-bold text-primary tracking-tight leading-tight">
                  غرفة تجارة دمشق
                </h1>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-12">
            <Link
              to="/"
              className="text-secondary font-bold hover:opacity-80 transition"
            >
              الرئيسية
            </Link>
            <a
              href="#"
              className="text-slate-600 font-medium hover:text-secondary transition"
            >
              أخبار الغرفة
            </a>
            <a
              href="#"
              className="text-slate-600 font-medium hover:text-secondary transition"
            >
              مجلس الإدارة
            </a>
            <a
              href="#"
              className="text-slate-600 font-medium hover:text-secondary transition"
            >
              الخدمات
            </a>
            <a
              href="#"
              className="text-slate-600 font-medium hover:text-secondary transition"
            >
              مركز التدريب
            </a>
          </div>

          {/* 3. RIGHT: Login Button */}
          <div className="flex-1 flex items-center justify-end">
            <Link to="/login">
              <button className="hidden md:block bg-emerald-900 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-emerald-800 transition shadow-md active:scale-95 cursor-pointer">
                تسجيل الدخول
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 text-right">
            <a
              href="#"
              className="block px-3 py-3 text-base font-bold text-secondary bg-emerald-50 rounded-lg"
            >
              الرئيسية
            </a>
            <a
              href="#"
              className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg"
            >
              أخبار الغرفة
            </a>
            <a
              href="#"
              className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg"
            >
              مجلس الإدارة
            </a>
            <a
              href="#"
              className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg"
            >
              الخدمات
            </a>
            <a
              href="#"
              className="block px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg"
            >
              مركز التدريب
            </a>
            <div className="pt-4 px-3">
              <button className="w-full bg-emerald-900 text-white py-3 rounded-lg font-bold shadow-md">
                تسجيل الدخول
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
