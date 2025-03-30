import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LayoutWithNavbarAndFooter, LayoutWithoutNavbarAndFooter, LayoutWithoutFooter
} from "./components/Layouts.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import SignupPage from "./pages/signup/SignupPage.jsx";
import LoginPage from "./pages/signup/LoginPage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ProductsPage from "./pages/products/ProductsPage.jsx";
import PricingPage from "./pages/pricing/PricingPage.jsx";
import SupportPage from "./pages/support/SupportPage.jsx";
import NotFound from "./components/NotFound.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWithNavbarAndFooter><HomePage /></LayoutWithNavbarAndFooter>} />
        <Route path="/signup" element={<LayoutWithoutNavbarAndFooter><SignupPage /></LayoutWithoutNavbarAndFooter>} />
        <Route path="/login" element={<LayoutWithoutNavbarAndFooter><LoginPage /></LayoutWithoutNavbarAndFooter>} />
        <Route path="/about" element={<LayoutWithNavbarAndFooter><AboutPage /></LayoutWithNavbarAndFooter>} />
        <Route path="/products" element={<LayoutWithNavbarAndFooter><ProductsPage /></LayoutWithNavbarAndFooter>} />
        <Route path="/pricing" element={<LayoutWithNavbarAndFooter><PricingPage /></LayoutWithNavbarAndFooter>} />
        <Route path="/support" element={<LayoutWithoutFooter><SupportPage /></LayoutWithoutFooter>} />
        <Route path="*" element={<LayoutWithNavbarAndFooter><NotFound /></LayoutWithNavbarAndFooter>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
