import { BrowserRouter, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Layout from "./component/app/Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
