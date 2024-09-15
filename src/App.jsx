import React, { lazy, Suspense, useState, useEffect } from "react";
import Footer from "./UI/Component/Footer/Footer";
import Header from "./UI/Component/Home.jsx/Component/Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "./UI/Component/Loading/Loading";
import AboutPages from "./Pages/About";
import ScrollingTicker from "./UI/Component/ScrollingTicker/ScrollingTicker";
import ServicesPage from "./Pages/Services";
import OurDetail from "./Pages/OurDetail";
import ContactPage from "./Pages/ContactPage";
import BookAppointmentPages from "./Pages/BookAppointment";

const HomePages = lazy(() => import("./Pages/Home"));
const ErrorPage = lazy(() => import("./UI/Component/404/ErrorPage"));

const App = () => {
  const [loading, setLoading] = useState(true);
  console.log("loading: ", loading);
  const pathname = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 400);

    setLoading(true);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <React.Fragment>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/about" element={<AboutPages />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/our-detail" element={<OurDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-appointment" element={<BookAppointmentPages />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      )}
      <ScrollingTicker />
      <Footer />
    </React.Fragment>
  );
};

export default App;
