import "./assets/initial/css/style.css";
import { Main } from "./pages/main/Main";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import getCookies from "./functions/getCookies";
import { useEffect, useState } from "react";
import getUserInfo from "./hooks/getUserInfo";
import { useDispatch } from "react-redux";
import { routes } from "./functions/routes";
import { Links } from "./components/links/Links";
import { Banner } from "./components/banner/banner";

export const App = () => {
  const dispatch = useDispatch();
  const [routesList] = useState(routes());

  useEffect(() => {
    getUserInfo(getCookies("token"), dispatch);
  }, []);

  return (
    <div className={"wrapper"}>
      <Header />

      <Links />

      <Banner />

      {/* <Routes>
                {routesList.map(route => <Route key={route.path} element={route.element} path={route.path} />)}
            </Routes> */}

      <Footer />
    </div>
  );
};
