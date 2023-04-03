import "./App.css";
import ResponsiveAppBar from "../src/Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Routing from "./Pages/Routing";
import First from "./Components/First";
import Second from "./Components/Second";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="routing" element={<Routing />}>
            <Route path="first" element={<First />} />
            <Route path="second" element={<Second />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
