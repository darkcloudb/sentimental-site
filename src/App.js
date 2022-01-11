import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Homepage from "./Components/Homepage";
import Concept from "./Components/Concept";
import Story from "./Components/Story";
import Characters from "./Components/Characters";
import Graphic from "./Components/Graphic";
import System from "./Components/System";
import Download from "./Components/Download";
import Special from "./Components/Special";
import Spec from "./Components/Spec";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="concept" element={<Concept />} />
        <Route path="story" element={<Story />} />
        <Route path="chars" element={<Characters />} />
        <Route path="graphic" element={<Graphic />} />
        <Route path="system" element={<System />} />
        <Route path="download" element={<Download />} />
        <Route path="special" element={<Special />} />
        <Route path="spec" element={<Spec />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
