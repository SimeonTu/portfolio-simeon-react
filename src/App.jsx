import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import CookieCaseStudy from './pages/CookieCaseStudy';
import DevEventsCaseStudy from './pages/DevEventsCaseStudy';
import IFDbCaseStudy from './pages/IFDbCaseStudy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="case-studies/cookie" element={<CookieCaseStudy />} />
          <Route path="case-studies/dev-events" element={<DevEventsCaseStudy />} />
          <Route path="case-studies/ifdb" element={<IFDbCaseStudy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
