import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/UI/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/home/Home";
import Resume from "./pages/Resume/Resume";


function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/resume",
          element: <Resume />,
        },
      ]
    },


  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
