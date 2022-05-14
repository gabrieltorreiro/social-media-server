import { Routes, Route } from "react-router-dom";
import { Context } from "./AuthContex";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Context>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Context>
  );
}

export default App;
