import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", color: "hover:bg-[#1877F2]" },
    { icon: <FaTwitter />, href: "#", color: "hover:bg-[#1DA1F2]" },
    { icon: <FaInstagram />, href: "#", color: "hover:bg-[#E4405F]" },
    { icon: <FaLinkedinIn />, href: "#", color: "hover:bg-[#0077B5]" },
  ];

  return (
    <footer className="bg-slate-50 text-slate-600 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        {/* Column 1: Brand & Socials */}
        <div className="space-y-6">
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
          <p className="text-slate-500 leading-relaxed text-sm">
            منصة القطاع الخاص وصوته إلى صُناع القرار لبناء اقتصاد سوري تنافسي
            بحوار وتكامل مستمر.
          </p>

          {/* Social Icons Section */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 transition-all duration-300 hover:text-white hover:shadow-lg ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-6 underline decoration-secondary decoration-2 underline-offset-8">
            روابط سريعة
          </h3>
          <ul className="space-y-3">
            {[
              "عن الغرفة ومجلس الإدارة",
              "القرارات والتعاميم",
              "مركز التدريب والدورات",
              "مكتبة الصور",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-secondary hover:mr-1 transition-all duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-6 underline decoration-secondary decoration-2 underline-offset-8">
            تواصل معنا
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-secondary shrink-0" size={20} />
              <span>الحريقة - دمشق - سوريا</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-secondary shrink-0" size={20} />
              <span dir="ltr">+963-11-9935</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-secondary shrink-0" size={20} />
              <span>info@dcc.sy</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar with Dynamic Year */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-medium">
        <p>© {currentYear} غرفة تجارة دمشق. جميع الحقوق محفوظة.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition">
            سياسة الخصوصية
          </a>
          <a href="#" className="hover:text-primary transition">
            شروط الاستخدام
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
