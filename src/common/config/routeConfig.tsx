import {createBrowserRouter } from "react-router-dom";
import { NeswPage } from "../../pages/NewsPage";

export const routes = createBrowserRouter([

{

    path: "/",
    element: <NeswPage />,
}])