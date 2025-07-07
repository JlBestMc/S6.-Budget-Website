import CalculatorPage from "./pages/CalculatorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <BrowserRouter basename="/S6.-Budget-Website/">
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
