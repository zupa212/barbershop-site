import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const Franchise = lazy(() => import("./pages/Franchise"));
const PanoramaShop = lazy(() => import("./pages/PanoramaShop"));
const ThermiShop = lazy(() => import("./pages/ThermiShop"));
const KalamariaShop = lazy(() => import("./pages/KalamariaShop"));
const HairAndNails = lazy(() => import("./pages/HairAndNails"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Toaster />
          <Sonner />
          <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/kings-barbershop-panorama" element={<PanoramaShop />} />
              <Route path="/kings-barbershop-thermi" element={<ThermiShop />} />
              <Route path="/kings-barbershop-kalamaria" element={<KalamariaShop />} />
              <Route path="/kings-hair-and-nails-panorama" element={<HairAndNails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<Index />} />
            </Routes>
          </Suspense>
          <Analytics />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
