import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FacultyTable from "./Components/Faculty/FacultyTable";
import FacultyDetails from "./Components/Faculty/FacultyDetails";
import CoursesPage from "./Components/Courses/CoursesPage";
// import FacultyDetails from "./Components/Faculty/FacultyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all-faculties",
    element: <FacultyTable />,
  },
  {
    path: "/individual-faculty/:id",
    element: <FacultyDetails />,
  },
  {
    path: "/all-courses",
    element: <CoursesPage />,
  },
]);
