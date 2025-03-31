// Core
import { FC } from "react";
import { useRoutes } from "react-router-dom";

// Pages
import Home from "../Home/Index";
import MyAccount from "../MyAccount/Index";
import MyOrder from "../MyOrder/Index";
import MyOrders from "../MyOrders/Index";
import NotFound from "../NotFound/Index";
import SignIn from "../SignIn/Index";

const AppRouter: FC = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/auth", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

export default AppRouter;
