import React, { lazy, Suspense, useState, useEffect } from "react";
import Footer from "./UI/Component/Footer/Footer";
import Header from "./UI/Component/Home.jsx/Component/Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "./UI/Component/Loading/Loading";

const HomePages = lazy(() => import("./Pages/Home"));
const AboutPages = lazy(() => import("./Pages/About"));
const ServicesPage = lazy(() => import("./Pages/Services"));
const OurDetail = lazy(() => import("./Pages/OurDetail"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const BookAppointmentPages = lazy(() => import("./Pages/BookAppointment"));
const ScrollingTicker = lazy(() => import("./UI/Component/ScrollingTicker/ScrollingTicker"));
const ErrorPage = lazy(() => import("./UI/Component/404/ErrorPage"));

const App = () => {
  const [loading, setLoading] = useState(true);
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
