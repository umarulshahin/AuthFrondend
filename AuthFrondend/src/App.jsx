import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import PrivatRoute from "./utils/PrivatRoute";
import Home from "./Pages/Home";
import Store from "./Redux/AppStore";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <PrivatRoute>
                  <Home />
                </PrivatRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
