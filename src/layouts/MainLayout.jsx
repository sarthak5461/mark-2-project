import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      {/* Spacer padding so fixed navbar doesn't overlap inner pages; home handles its own hero spacing. */}
      <main className={isHome ? "" : "pt-24 md:pt-28"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
