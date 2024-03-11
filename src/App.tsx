import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home"
import Users from "./pages/users/Users"
import Categories from "./pages/categories/Categories"
import Products from "./pages/products/Products"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import './styles/global.scss'
import Orders from "./pages/orders/Orders";
import Deliveries from "./pages/deliveries/Deliveries";

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
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "categories", element: <Categories /> },
      { path: "products", element: <Products /> },
      { path: "orders", element: <Orders /> },
      { path: "deliveries", element: <Deliveries /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

  return <RouterProvider router={router} />;
}

export default App
