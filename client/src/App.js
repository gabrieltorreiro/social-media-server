import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import { createGlobalStyle } from 'styled-components';
import ThemeButton from './components/ThemeButton';

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #1b74e4;
    --gray: #65676b;
    --font-color: ${({ theme }) => theme.fontColor};
    --bg-color: ${({ theme }) => theme.bgColor};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.body};
  }
`;

function App() {

  const { theme } = useContext(UserContext);

  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeButton />
      <Routes>
        <Route element={<ProtectedRoute />} >
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
