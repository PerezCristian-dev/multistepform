import { Route, Routes } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { AddOnsPage, ConfirmationPage, InfoPage, PlanPage, SummaryPage } from "../pages";

export const AppRouter = () => {
  return (
    <div className="main__modal">
      <div className="main_page">
        <SideBar />
        <Routes>
          <Route path="/*" element={<InfoPage />} />
          <Route path="/plans" element={<PlanPage />} />
          <Route path="/addons" element={<AddOnsPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />}></Route>
        </Routes>
        </div>
    </div>
  );
};
