import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Knowledge from "../components/Knowledge";
import Contacts from "../components/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutMe",
    element: <AboutMe />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/knowledge",
    element: <Knowledge />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

export default router;
