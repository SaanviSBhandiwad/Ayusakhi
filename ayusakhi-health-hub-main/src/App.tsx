import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import LanguageSelection from "./pages/LanguageSelection";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Premium from "./pages/Premium";
import UserDetails from "./pages/UserDetails";

import AuthRoute from "@/components/AuthRoute";
import OnboardingRoute from "@/components/OnboardingRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />

          {/* ONBOARDING (logged-in users only) */}
          <Route
            path="/user-details"
            element={
              <AuthRoute>
                <UserDetails />
              </AuthRoute>
            }
          />

          <Route
            path="/language-selection"
            element={
              <AuthRoute>
                <LanguageSelection />
              </AuthRoute>
            }
          />

          {/* MAIN APP */}
          <Route
            path="/dashboard"
            element={
              <AuthRoute>
                <OnboardingRoute>
                  <Dashboard />
                </OnboardingRoute>
              </AuthRoute>
            }
          />

          <Route
            path="/premium"
            element={
              <AuthRoute>
                <OnboardingRoute>
                  <Premium />
                </OnboardingRoute>
              </AuthRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

