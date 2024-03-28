import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FacultyTable from "./Components/Faculty/FacultyTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all-faculties",
    element: <FacultyTable />,
  },
]);
