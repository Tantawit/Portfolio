import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import ContactMe from "./pages/home/ContactMe";
import Education from "./pages/home/Education";
import ExtraCurriculum from "./pages/home/ExtraCurriculum";
import SkillsWork from "./pages/home/SkillsWork";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/extra" element={<ExtraCurriculum />} />
          <Route path="/skills" element={<SkillsWork />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
