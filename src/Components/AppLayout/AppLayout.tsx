import NavBar from "../NavBar/NavBar";
import OverView from "../OverView/OverView";
import { Route, Routes } from "react-router-dom";
import Wailets from "../Wailets/Wailets";
import Transactions from "../Transaction/Transaction";
const AppLayout = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="w-full h-dvh">
        <Routes>
          <Route path="/*" element={<OverView />} />
          <Route path="/wailets" element={<Wailets />} />
          <Route path="/transaction" element={<Transactions />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppLayout;
