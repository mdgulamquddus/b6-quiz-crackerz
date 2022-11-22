import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Layout/Root";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import { fetchApi } from "./FetchApi";
import Quiz from "../components/Quiz/Quiz";
import fetchQuiz from "./QuizData";
import Page404 from "../components/404/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Page404 />,
    loader: fetchApi,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/topics",
        element: <Topics />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        loader: () => fetch("blogs.json"),
        element: <Blog />,
      },
      {
        path: "/courses/:quizID/:courseName",
        loader: async ({ params }) => {
          return fetchQuiz(params.quizID);
        },
        element: <Quiz />,
      },
    ],
  },
]);

export default router;
