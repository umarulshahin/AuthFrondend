import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import PrivetRoute from "./utils/PrivetRoute";
import Home from "./Pages/Home";
import Store from "./Redux/AppStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <PrivetRoute>
                  <Home />
                </PrivetRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
