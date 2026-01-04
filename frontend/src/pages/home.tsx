import { Outlet } from "react-router-dom";
import Header from "../coreComponents/header";
import Footer from "../coreComponents/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

