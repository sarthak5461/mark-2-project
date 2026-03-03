import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
