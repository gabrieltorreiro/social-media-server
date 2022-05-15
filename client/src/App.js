import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./AuthContex";
import { UserContextProvider } from "./UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <Routes>
          <Route element={<ProtectedRoute />} >
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
