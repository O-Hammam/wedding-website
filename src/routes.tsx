import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MarriageCeremony from "./components/MarriageCeremony";
import LandingPage from "./components/LandingPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/el-fara7" element={<Home />} />
    <Route path="/katb-el-ketab" element={<MarriageCeremony />} />
  </Routes>
);

export default AppRoutes;
