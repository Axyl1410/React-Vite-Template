import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import ScrollToTop from "./components/common/ScrollToTop";
import { ToastProvider } from "./components/toast/ToastContext";

const Home = lazy(() => import("./pages/Home"));

export default function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(savedTheme);
  }, []);

  return (
    <ToastProvider>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </ToastProvider>
  );
}
