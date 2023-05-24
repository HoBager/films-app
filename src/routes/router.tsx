import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Films from "./main-page/films";
import filmLoader from "./film-page/film-loader";
import FilmPage from "./film-page/film-page";
import Search from "./search-page/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Films />,
      },
      {
        path: "/films/:filmId",
        loader: filmLoader,
        element: <FilmPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
