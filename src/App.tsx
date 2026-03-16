import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkingTogether from "./pages/WorkingTogether";
import About from "./pages/About";
import Reflections from "./pages/Reflections";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NlIndex from "./pages/nl/Index";
import NlWorkingTogether from "./pages/nl/WorkingTogether";
import NlAbout from "./pages/nl/About";
import NlReflections from "./pages/nl/Reflections";
import NlContact from "./pages/nl/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/working-together" element={<WorkingTogether />} />
          <Route path="/about" element={<About />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nl" element={<NlIndex />} />
          <Route path="/nl/working-together" element={<NlWorkingTogether />} />
          <Route path="/nl/about" element={<NlAbout />} />
          <Route path="/nl/reflections" element={<NlReflections />} />
          <Route path="/nl/contact" element={<NlContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
