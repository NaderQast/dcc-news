import React, { useState } from "react";
import {
  Save,
  ArrowRight,
  Image as ImageIcon,
  UploadCloud,
  Bold,
  Italic,
  Underline,
  Link as LinkIcon,
  List,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom"; // Assuming React Router is used
import { useParams } from "react-router-dom"; // To get the article ID from URL
const EditArticle = () => {
  const { id } = useParams(); // To get the article ID from the URL

  // 1. Initial State (Mocking a GET request from your future API)
  const [article, setArticle] = useState({
    id: "104",
    title: "غرفة تجارة دمشق تستقبل سفير المملكة الأردنية الهاشمية",
    category: "أبرز الأخبار",
    status: "published",
    content:
      "تأكيد على الأخوّة والتكامل الاقتصادي. نتوجه الأسبوع القادم إلى عمّان لتوقيع توأمة بين غرفتي دمشق وعمّان وإطلاق شراكات استراتيجية لدعم الإنتاج والاستثمار.\n\nوتأتي هذه الخطوة في إطار تعزيز التعاون التجاري بين البلدين الشقيقين...",
    imagePreview:
      "https://news.dcc.sy/storage/news/2026/623286486_1350970467068135_5815223139187687840_n.jpg_1769699593.webp",
    imageFile: null, // Will hold the actual file object when uploading a new one
  });

  const [isSaving, setIsSaving] = useState(false);

  // 2. Handlers for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Handler for Image Upload (Mocking the file selection)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a local URL to preview the image before uploading to server
      const previewUrl = URL.createObjectURL(file);
      setArticle((prev) => ({
        ...prev,
        imageFile: file,
        imagePreview: previewUrl,
      }));
    }
  };

  // 4. Submit Handler (Where your future API PUT/POST request goes)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    // MOCK API DELAY: 1.5 seconds
    setTimeout(() => {
      console.log("Saving to API...", article);

      // Here you will eventually write:
      // const formData = new FormData();
      // formData.append('title', article.title);
      // if (article.imageFile) formData.append('image', article.imageFile);
      // await axios.put(`/api/articles/${article.id}`, formData);

      setIsSaving(false);
      alert("تم حفظ التعديلات بنجاح!"); // Replace with a nice toast notification later
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-base-200 font-sans pb-12">
      {/* --- TOP NAVBAR / BREADCRUMBS --- */}
      <div className="bg-white border-b border-base-300 px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/admin/dashboard"
              className="btn btn-circle btn-ghost btn-sm text-base-content/60 hover:text-primary"
            >
              <ArrowRight size={20} />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-primary">تعديل المقال</h1>
              <div className="text-xs text-base-content/50 font-medium mt-1">
                لوحة التحكم / الأخبار / تعديل
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-outline btn-primary hover:bg-primary/10 bg-white">
              <Eye size={18} className="mr-2" />
              معاينة
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSaving}
              className="btn btn-primary text-white shadow-md"
            >
              {isSaving ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <Save size={18} className="mr-2" />
              )}
              حفظ التعديلات
            </button>
          </div>
        </div>
      </div>

      {/* --- MAIN EDITOR AREA --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN: Main Content (Takes up 2/3 space) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Input Card */}
            <div className="card bg-white shadow-sm border border-base-200">
              <div className="card-body p-6">
                <p className="text-xs text-slate-400">
                  الرقم التعريفي للمقال: {id}
                </p>
                <label className="text-sm font-bold text-primary mb-2 block">
                  عنوان المقال
                </label>
                <input
                  type="text"
                  name="title"
                  value={article.title}
                  onChange={handleChange}
                  className="input input-bordered input-lg w-full font-bold text-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="أدخل عنوان الخبر هنا..."
                />
              </div>
            </div>

            {/* Rich Text Editor Mockup Card */}
            <div className="card bg-white shadow-sm border border-base-200">
              <div className="card-body p-0 overflow-hidden">
                {/* Editor Toolbar Mockup */}
                <div className="bg-base-100 border-b border-base-200 px-4 py-3 flex gap-2 flex-wrap items-center">
                  <button className="btn btn-sm btn-ghost btn-square text-base-content/70">
                    <Bold size={16} />
                  </button>
                  <button className="btn btn-sm btn-ghost btn-square text-base-content/70">
                    <Italic size={16} />
                  </button>
                  <button className="btn btn-sm btn-ghost btn-square text-base-content/70">
                    <Underline size={16} />
                  </button>
                  <div className="divider divider-horizontal mx-0"></div>
                  <button className="btn btn-sm btn-ghost btn-square text-base-content/70">
                    <LinkIcon size={16} />
                  </button>
                  <button className="btn btn-sm btn-ghost btn-square text-base-content/70">
                    <List size={16} />
                  </button>
                  <div className="divider divider-horizontal mx-0"></div>
                  <button className="btn btn-sm btn-ghost text-base-content/70">
                    <ImageIcon size={16} className="mr-1" /> إضافة وسائط
                  </button>
                </div>

                {/* Editor Textarea */}
                <textarea
                  name="content"
                  value={article.content}
                  onChange={handleChange}
                  className="textarea w-full h-96 p-6 rounded-none focus:outline-none text-base leading-relaxed resize-y"
                  placeholder="اكتب تفاصيل الخبر هنا..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Metadata & Image (Takes up 1/3 space) */}
          <div className="space-y-6">
            {/* Publishing Settings */}
            <div className="card bg-white shadow-sm border border-base-200">
              <div className="card-body p-6">
                <h3 className="font-bold text-primary mb-4 border-b border-base-200 pb-2">
                  إعدادات النشر
                </h3>

                <div className="form-control w-full mb-4">
                  <label className="label text-sm font-medium text-base-content/70">
                    حالة المقال
                  </label>
                  <select
                    name="status"
                    value={article.status}
                    onChange={handleChange}
                    className="select select-bordered w-full focus:border-primary"
                  >
                    <option value="published">منشور</option>
                    <option value="draft">مسودة</option>
                    <option value="archived">مؤرشف</option>
                  </select>
                </div>

                <div className="form-control w-full">
                  <label className="label text-sm font-medium text-base-content/70">
                    التصنيف
                  </label>
                  <select
                    name="category"
                    value={article.category}
                    onChange={handleChange}
                    className="select select-bordered w-full focus:border-primary"
                  >
                    <option value="أبرز الأخبار">أبرز الأخبار</option>
                    <option value="اقتصاد">اقتصاد</option>
                    <option value="حوارات">حوارات</option>
                    <option value="صناعة">صناعة</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Featured Image Uploader */}
            <div className="card bg-white shadow-sm border border-base-200">
              <div className="card-body p-6">
                <h3 className="font-bold text-primary mb-4 border-b border-base-200 pb-2 flex items-center gap-2">
                  <ImageIcon size={18} />
                  الصورة البارزة
                </h3>

                <div className="form-control w-full">
                  {/* Image Preview Area */}
                  {article.imagePreview ? (
                    <div className="relative rounded-xl overflow-hidden border border-base-300 group">
                      <img
                        src={article.imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <label className="btn btn-sm btn-primary cursor-pointer">
                          تغيير الصورة
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                    </div>
                  ) : (
                    /* Empty Upload Area */
                    <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-base-300 rounded-xl cursor-pointer hover:bg-base-50 hover:border-primary transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadCloud className="w-10 h-10 mb-3 text-base-content/40" />
                        <p className="mb-2 text-sm text-base-content/60 font-semibold">
                          اضغط لرفع صورة
                        </p>
                        <p className="text-xs text-base-content/40">
                          PNG, JPG, WEBP (Max 2MB)
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                  )}

                  {article.imagePreview && (
                    <button
                      onClick={() =>
                        setArticle((prev) => ({
                          ...prev,
                          imagePreview: null,
                          imageFile: null,
                        }))
                      }
                      className="btn btn-outline btn-error btn-sm mt-4 w-full"
                    >
                      إزالة الصورة
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArticle;
