import NavBar from "../NavBar/NavBar";
import OverView from "../OverView/OverView";
import { Route, Routes } from "react-router-dom";
const AppLayout = () => {
  
  return (
    <div className="flex">
      <NavBar />
      <div className="w-full h-dvh">
        <Routes>
          <Route path="/*" element={<OverView />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppLayout;
