import { createBrowserRouter } from "react-router";
import Home from "@routes/home";
import Works from "@routes/works";
import Projects from "@routes/projects";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);
export default router;
