import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams, Outlet } from "react-router-dom";
import { LanguageProvider, useLanguage, Language } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Test from "./pages/Test";
import Mortgage from "./pages/Mortgage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Language detection component
const LanguageRedirect = () => {
  // Detect user's preferred language from browser
  const getPreferredLanguage = (): Language => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('nl')) return 'nl';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('pl')) return 'pl';
    return 'en'; // Default to English
  };

  const preferredLang = getPreferredLanguage();
  return <Navigate to={`/${preferredLang}`} replace />;
};

// Language-aware layout component
const LanguageLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage } = useLanguage();
  
  React.useEffect(() => {
    if (lang && ['nl', 'fr', 'en', 'pl'].includes(lang)) {
      setLanguage(lang as Language);
    }
  }, [lang, setLanguage]);

  return <Outlet />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.PROD ? '/bnp-clone' : '/'}>
          <Routes>
            {/* Redirect root to language-specific route */}
            <Route path="/" element={<LanguageRedirect />} />
            
            {/* Language-specific routes */}
            <Route path="/:lang" element={<LanguageLayout />}>
              <Route index element={<Index />} />
              <Route path="test" element={<Test />} />
              <Route path="public/*" element={<Mortgage />} />
              <Route path="hypothecaire-lening" element={<Mortgage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            
            {/* Legacy routes - redirect to default language */}
            <Route path="/test" element={<Navigate to="/en/test" replace />} />
            <Route path="/bnp-clone/hypothecair-krediet" element={<Navigate to="/bnp-clone/en/hypothecair-krediet" replace />} />
            
            {/* Catch all - redirect to 404 in default language */}
            <Route path="*" element={<Navigate to="/en/404" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
