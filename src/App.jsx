import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Landing from "./Pages/Landing";
import Concept from "./Pages/Concept";
import CategoryPage from "./Pages/Category/";
import ConsultantRegistration from "./Pages/Register/";
import DeveloperInfo from "./Pages/DeveloperInfo";
import MesMissionsHeaderLinkPage from "./Pages/MesMissionsHeaderLink"
import FaqBiz from './Pages/FaqBiz/'
import ScreenContact from "./Pages/ScreenContact";
import UserAccounts from './Pages/Web1920_79/'
import Screen7 from "./Pages/Screen7/Screen7";
import Qui from "./Pages/QueSommes/";
import Response from "./Pages/Response/";
import Screent from "./Pages/screent/";
import Arthur from "./Pages/ArthurSmith/";
import MonEntreprise from './Pages/MonEntreprise/'
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
          <Route path="/screenContact" element={<ScreenContact/>}/>
          <Route path="/faq" element={<FaqBiz />} />
          <Route path="/accounts" element={< UserAccounts/>} />
          <Route path="/screen7" element={<Screen7 />} />
           <Route path="/qui" element={<Qui />} />
          <Route path="/response" element={<Response />} />
          <Route path="/screent" element={<Screent />} />
          <Route path="/arthur" element={<Arthur />} />
          <Route path="/entreprise" element={<MonEntreprise />} />

          <Route
            path="/consultant-registration"
            element={<ConsultantRegistration />}
          />
          <Route
            path="/developer-info"
            element={<DeveloperInfo />}
          />
          <Route
            path="/mes-missions"
            element={<MesMissionsHeaderLinkPage />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
