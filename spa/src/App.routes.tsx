import { Route, Routes } from "react-router-dom";
import { Home } from "./features/home/Home";
import { DefaultLayout } from "./theme/layout/default/Layout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
