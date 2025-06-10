import { createBrowserRouter } from "react-router";
import Home from "@routes/home";
import Works from "@routes/works";
import Projects from "@routes/projects";
import App from "./App";
import ErrorBoundary from "@components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "works",
        element: <Works />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "projects",
        element: <Projects />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);
export default router;
