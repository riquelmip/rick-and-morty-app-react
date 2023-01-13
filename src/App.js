import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Characters from "./pages/Characters";
import Welcome from "./pages/Welcome";
import Default from "./pages/Default";
import Login from "./pages/Login";
import "./css/generales.css";
import Logout from "./pages/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Us from "./pages/Us";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Welcome />} />
          {isAuthenticated && (
            <Route path="/characters" element={<Characters />} />
          )}
          {isAuthenticated && <Route path="/us" element={<Us />} />}

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
