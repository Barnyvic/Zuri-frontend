import { BrowserRouter, Routes, Route } from "react-router-dom";
import Firstpage from "./Components/Firstpage/Firstpage";
import Industry from "./Pages/Industry/Industry";
import Experience from "./Pages/IndustryExperience/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstpage/>}/>
        <Route path="/industry" element={<Industry/>} />
        <Route  path="/Experience" element={<Experience/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
