import { Routes, Route } from "react-router-dom";
import { Context } from "./AuthContex";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Context>
      <Routes>
        <Route element={<ProtectedRoute />} >
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Context>
  );
}

export default App;
