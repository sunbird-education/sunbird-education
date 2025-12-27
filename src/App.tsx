import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { PrincipalsDesk } from "./pages/PrincipalsDesk";
import { ManagersDesk } from "./pages/ManagersDesk";
import { AboutSchool } from "./pages/AboutSchool";
import { Facility } from "./pages/Facility";
import { Achievement } from "./pages/Achievement";
import { VisionMission } from "./pages/VisionMission";
import { Gallery } from "./pages/Gallery";
import { Calendar } from "./pages/Calendar";
import { Contact } from "./pages/Contact";
import { Downloads } from "./pages/Downloads";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/principals-desk" element={<PrincipalsDesk />} />
            <Route path="/about/managers-desk" element={<ManagersDesk />} />
            <Route path="/about/about-school" element={<AboutSchool />} />
            <Route path="/about/facility" element={<Facility />} />
            <Route path="/about/achievement" element={<Achievement />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/downloads" element={<Downloads />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
