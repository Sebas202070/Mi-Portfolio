import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/Projects" Component={Projects} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
