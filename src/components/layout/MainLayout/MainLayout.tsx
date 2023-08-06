import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
