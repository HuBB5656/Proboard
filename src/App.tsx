
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Navbar from "./componets/navbar/Navbar"
import Footer from "./componets/footter/Footer"
import Menu from "./componets/menu/Menu"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"
import "./style/global.scss"

function App(){
   
   const Layout = ()=>{
     return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>

          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
     )
   }
   const router = createBrowserRouter([
      {
        path:"/",
        element:<Layout/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"products",
            element:<Products/>
          },
          {
            path:"users",
            element:<Users/>
          }
        ]
      }
   ])
  return <RouterProvider router={router}/>
}

export default App;