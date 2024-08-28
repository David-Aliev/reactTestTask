import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./index.css";

// react-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import EditUser from "./pages/EditUserPage/EditUser";
import { FilterProvider } from "./FiltersContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/EditUserPage",
    element: <EditUser />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/UserPage",
    element: <UsersPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FilterProvider>
      <RouterProvider router={router} />
    </FilterProvider>
  </StrictMode>
);
