import { Routes, Route } from "react-router-dom";

import HomeUI from "./pages/HomeUI";
import ARPage from "./pages/ARPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeUI />} />
      <Route path="/ar" element={<ARPage />} />
    </Routes>
  );
}
