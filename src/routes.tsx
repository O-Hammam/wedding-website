import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MarriageCeremony from "./components/MarriageCeremony";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/katb-el-ketab" element={<MarriageCeremony />} />
  </Routes>
);

export default AppRoutes;
