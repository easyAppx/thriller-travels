import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "../pages";
import { Dashboard, Wallet, Settings, Flights, Reports, Statistics } from "../components/layouts";
import { MAIN, SETTINGS, WALLET, DASHBOARD, FLIGHTS, REPORTS, STATISTICS } from "./CONSTANTS";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={MAIN} element={<Main />} />
        <Route path={DASHBOARD + "/:tab?"} element={<Dashboard />} />
        <Route path={WALLET} element={<Wallet />} />
        <Route path={SETTINGS} element={<Settings />} />
        <Route path={FLIGHTS} element={<Flights />} />
        <Route path={REPORTS} element={<Reports />} />
        <Route path={STATISTICS} element={<Statistics />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
