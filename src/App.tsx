
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Franchise from "./pages/Franchise";
import PanoramaShop from "./pages/PanoramaShop";
import ThermiShop from "./pages/ThermiShop";
import KalamariaShop from "./pages/KalamariaShop";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  // Create a client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <LanguageProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/kings-barbershop-panorama" element={<PanoramaShop />} />
              <Route path="/kings-barbershop-thermi" element={<ThermiShop />} />
              <Route path="/kings-barbershop-kalamaria" element={<KalamariaShop />} />
            </Routes>
            <Analytics />
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
