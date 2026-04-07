import React, { useState } from "react";
import { Mail, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/fabric-of-the-nation.png')] pointer-events-none"></div>

      <motion.div
        className="max-w-md w-full space-y-8 bg-base-100 p-10 rounded-3xl shadow-sm border border-base-300 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div>
          <h2 className="text-center text-3xl font-extrabold text-primary tracking-tight">
            تسجيل الدخول
          </h2>
          <p className="mt-2 text-center text-sm text-base-content/60 font-medium">
            بوابة الخدمات الإلكترونية لغرفة تجارة دمشق
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email Field - Bigger and Rounded */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-primary mr-2">
                  البريد الإلكتروني
                </span>
              </label>
              <div className="relative">
                <div className="absolute mt-2 inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-base-content/40">
                  <Mail size={22} />
                </div>
                <input
                  type="email"
                  placeholder="example@dcc.sy"
                  className="input input-bordered input-lg py-2 mt-2 bg-emerald-50 w-full pr-12 rounded-full focus:input-primary focus:bg-emerald-100 bg-base-100 transition-all"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field - Bigger and Rounded */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-primary mr-2">
                  كلمة المرور
                </span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer inset-y-0 right-0 pr-4 mt-2 flex items-center text-base-content/40 hover:text-primary focus:outline-none z-10"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered input-lg py-2 mt-2 bg-emerald-50 w-full pr-12 rounded-full focus:input-primary focus:bg-emerald-100 bg-base-100 transition-all "
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm px-2">
            <div className="form-control ">
              <label className="label cursor-pointer gap-1 flex items-center justify-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm rounded-md"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="label-text font-medium mx-2 ">تذكر حسابي</span>
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="font-bold text-primary hover:underline transition"
            >
              نسيت كلمة المرور ؟
            </Link>
          </div>

          {/* Button - Custom Bordered Style, No Shadow, Active Effects */}
          <div>
            <button
              type="submit"
              className="btn btn-lg w-full rounded-full border-2 border-primary bg-emerald-900  text-white hover:bg-emerald-800  active:scale-[0.98] active:bg-emerald-800 transition-all duration-200 shadow-none py-2 cursor-pointer"
            >
              تسجيل الدخول
            </button>
          </div>
        </form>

        <div className="text-center pt-4 border-t border-base-200">
          <p className="text-sm text-base-content/60">
            ليس لديك حساب ؟{" "}
            <Link
              to="/register"
              className="font-bold text-success hover:underline text-md"
            >
              تقديم طلب انتساب
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
