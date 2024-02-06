import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home";
import Marinas from "../pages/Marinas";
import Berthing from "../pages/Berthing";
import Rallies from "../pages/Rallies";

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
        element: <Berthing/>,
      },
      {
        path: "/rallies",
        element: <Rallies />,
      },
    ],
  },
]);

export default router;
