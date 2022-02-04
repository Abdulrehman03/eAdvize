import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Landing from "./Pages/Landing";
import Concept from "./Pages/Concept";
import CategoryPage from "./Pages/Category/";
import ConsultantRegistration from "./Pages/Register/";
import DeveloperInfo from "./Pages/DeveloperInfo";
import MesMissionsHeaderLinkPage from "./Pages/MesMissionsHeaderLink";
import FaqBiz from "./Pages/FaqBiz/";
import ScreenContact from "./Pages/ScreenContact";
import UserAccounts from "./Pages/Web1920_79/";
import Extra from "./Pages/ExtraPage/Screen7";
import Qui from "./Pages/QueSommes/";
import Response from "./Pages/Response/";
import Screent from "./Pages/screent/";
import Arthur from "./Pages/ArthurSmith/";
import MonEntreprise from "./Pages/MonEntreprise/";
import Screen7 from "./Pages/Screen7/Screen7";
import Screen8 from "./Pages/Screen7/Screen8";
import Screen9 from "./Pages/Screen7/Screen9";
import Candidature from "./Pages/Web1920/";
import DashboardPage from "./Pages/DashboardPage";
// import Web1920_18 from "./Pages/Web1920/Web190_18";
// import Web1920_25 from "./Pages/Web1920/Web1920_25";
// import Web1920_26 from "./Pages/Web1920/Web1920_26";
// import Web1920_27 from "./Pages/Web1920/Web1920_27";
// import Web1920_29 from "./Pages/Web1920/Web1920_29";
// import Web1920_30 from "./Pages/Web1920/Web1920_30";
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
          <Route path="/screenContact" element={<ScreenContact />} />
          <Route path="/faq" element={<FaqBiz />} />
          <Route path="/accounts" element={<UserAccounts />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/qui" element={<Qui />} />
          <Route path="/response" element={<Response />} />
          <Route path="/screent" element={<Screent />} />
          <Route path="/arthur" element={<Arthur />} />
          <Route path="/entreprise" element={<MonEntreprise />} />
          <Route path="/screen7" element={<Screen7 />} />
          <Route path="/screen8" element={<Screen8 />} />
          <Route path="/screen9" element={<Screen9 />} />
          <Route path="/candidature" element={<Candidature />} />
          {/* <Route path="/web1920_18" element={<Web1920_18 />} />
          <Route path="/web1920_25" element={<Web1920_25 />} />
          <Route path="/web1920_26" element={<Web1920_26 />} />
          <Route path="/web1920_27" element={<Web1920_27 />} />
          <Route path="/web1920_29" element={<Web1920_29 />} />
          <Route path="/web1920_30" element={<Web1920_30 />} /> */}
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route
            path="/consultant-registration"
            element={<ConsultantRegistration />}
          />
          <Route path="/developer-info" element={<DeveloperInfo />} />
          <Route path="/mes-missions" element={<MesMissionsHeaderLinkPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
