import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login"; // We will create this next
import EditArticle from "./pages/EditArticle";
import Contact from "./components/Contact/Contact";
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        {/* Top Header / Navigation */}
        <Header />

        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<Hero />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          <Route path="/edit-article/:id" element={<EditArticle />} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}
