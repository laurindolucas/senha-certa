import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageComponents from "./pages/componets";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import FirstloginPage from "./pages/first-registration";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout */}
        <Route path="/" element={<HomePage />}>
          <Route index element={<PageComponents />} />
          <Route path="componentes" element={<PageComponents />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="first-registration" element={<FirstloginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
