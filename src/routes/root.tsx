import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Marinas from "../pages/marinas";
import Berthing from "../pages/berthing";
import Rallies from "../pages/rallies";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "/marinas",
        element: <Marinas />,
      },
      {
        path: "/berthing",
        element: <Berthing />,
      },
      {
        path: "/rallies",
        element: <Rallies />,
      },
    ],
  },
]);

export default router;
