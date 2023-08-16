import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./componets/navbar/Navbar";
import Footer from "./componets/footter/Footer";
import Menu from "./componets/menu/Menu";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import "./style/global.scss";
import User from "./pages/users/User";
import Product from "./pages/products/Product";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>

          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "users",
          element: <Users />,
        },

        {
          path: "products/:id",
          element: <Product />,
        },
        {
          path: "users/:id",
          element: <User />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
