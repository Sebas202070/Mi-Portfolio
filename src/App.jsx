import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Home" Component={Home} />
        <Route path="/Projects" Component={Projects} />
        <Route path="/AboutMe" Component={AboutMe} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
