import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Test = React.lazy(() => import("pages/Test"));
const FAQs = React.lazy(() => import("pages/FAQs"));
const Visualmenu = React.lazy(() => import("pages/Visualmenu"));
const Menu = React.lazy(() => import("pages/Menu"));
const Reservations = React.lazy(() => import("pages/Reservations"));
const YoureInvited = React.lazy(() => import("pages/YoureInvited"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/youreinvited" element={<YoureInvited />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/visualmenu" element={<Visualmenu />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
