import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Landing from "./Pages/Landing";
import Concept from "./Pages/Concept";
import CategoryPage from "./Pages/Category/";
import ConsultantRegistration from "./Pages/Register/";

import "./App.css";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/category" element={<CategoryPage />} />

          <Route
            path="/consultant-registration"
            element={<ConsultantRegistration />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
