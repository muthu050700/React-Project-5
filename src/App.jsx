import { Children } from "react";
import Header from "./Components/Header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./Components/Body/Body";
import Shop from "./Components/Shop/Shop";
import Context from "./Utils/Context/Context";
import CartPage from "./Components/CartPage.jsx/CartPage";

import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Components/ScrollToTop";
const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Context>
      <RouterProvider router={appRouter} />
    </Context>
  );
}

export default App;
