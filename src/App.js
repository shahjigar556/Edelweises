import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UploadPage from "./pages/UploadPage";
import Profile from "./pages/Profile";
import CoBranding from "./pages/CoBranding";
import DashBoard from "./pages/DashBoard";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/upload" component={UploadPage} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/cobranding" component={CoBranding} />
      <Route exact path="/DashBoard" component={DashBoard} />
    </React.Fragment>
  );
}

export default App;
