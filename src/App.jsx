import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import CaseStudyDetail from "./components/CaseStudyDetail";
import {
  Introduction,
  ReasonScreen,
  Projects,
  PortfolioMenu,
  ProdivaStory,
} from "./illustration/Portfolio";
import "./illustration/portfolio.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="illustration-app">
        <PortfolioMenu />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/why-hire-me/:point" element={<ReasonScreen />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-study/prodiva" element={<ProdivaStory />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
