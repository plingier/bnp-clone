import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BNPNavigation from "@/components/BNPNavigation";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, getLocalizedUrl } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate(getLocalizedUrl(''));
  };

  return (
    <div className="min-h-screen bg-background">
      <BNPNavigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <button 
            onClick={handleGoHome}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
