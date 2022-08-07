import { BrowserRouter, Routes, Route } from "react-router-dom";
import Firstpage from "./Components/Firstpage/Firstpage";
import Industry from "./Pages/Industry/Industry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstpage/>}/>
        <Route path="/industry" element={<Industry/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
