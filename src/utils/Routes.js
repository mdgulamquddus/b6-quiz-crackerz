import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Layout/Root";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import { fetchApi } from "./FetchApi";
import Quiz from "../components/Quiz/Quiz";
import fetchQuiz from "./QuizData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <Blog />,
      },
      {
        path: "/courses/:quizID",
        loader: async ({ params }) => {
          return fetchQuiz(params.quizID);
        },
        element: <Quiz />,
      },
    ],
  },
]);

export default router;
