import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cartprovider from './cartprovider.jsx'
import AddProduct from './pages/addProduct.jsx'
import ProductDetails from './pages/productDetails.jsx'
import Cart from './pages/cart.jsx'
import { Provider } from 'react-redux'
import store from './stores/stores.js'
import Wishlist from './pages/whishlist.jsx'
import PaystackComponent from '../src/payStack/paystack.jsx'
import AdminProducts from './pages/adminproducts.jsx'
import NotFound from './pages/NotFound.jsx'
import Policy from './pages/policy.jsx'
import Register from './pages/Register.jsx'
import MyAccount from './pages/myAccount.jsx'
import ProtectedRoute from './components/protectedRoute.js'
import Dashboard from './pages/dashboad.jsx'
import Login from './pages/Login.jsx'
import Accountsettings from './pages/accountsettings.jsx'






const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  { path: "/", element: <App /> },
  {
    path: "/home",
    element: 
        <App />
    ,
  },
  {
    path: "/addproduct",
    element: (
    
        <AddProduct />
    ),
  },
  {
    path: "/ProductDetails/:product_id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: (
        <Cart />
    ),
    children: [
      { path: "paystack", element: <PaystackComponent /> },
    ],
  },
  { path: "paystack", element: <PaystackComponent /> },
  {
    path: "/whishlist",
    element: (
        <Wishlist />
    ),
  },
  {
    path: "/adminHome",
    element: (
      <ProtectedRoute roles={['admin']}>
        <AdminProducts />
      </ProtectedRoute>
    ),
  },
  {
    path: "/edit-product/:id",
    element: (
        <AdminProducts />
    ),
  },
  { path: "/return-policy", element: <Policy /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: (
        <Dashboard/>
    ),
  },
  {
    path: "/myaccount",
    element: (
        <MyAccount />
    ),
    children: [
                {index:true, element: <Dashboard/> },
                { path: "dashboard",index:true, element: <Dashboard/> },
                { path: "settings", element: <Accountsettings/> },
              ]

  },
  {
    path: "/login",
    element: (
        <Login/>
    ),
  },
]);


















// const router = createBrowserRouter([
//   { path: "*", element: <NotFound /> },
//    { path: "/", element: <App /> },
 
//    {
//     path: "/home", element: < App/>,

//    },

//    {
//     path: "/addproduct", element: < AddProduct/>,

//    },
//    {
//     path: "/ProductDetails/:product_id", element: < ProductDetails/>,

//    },
//      {
//     path: "/cart", element: < Cart/>,
//     children: [
//           { path: "paystack", element: <PaystackComponent/> },
//         ]

//    }
//    ,
//    { path: "paystack", element: <PaystackComponent/> },
//    {
//     path: "/whishlist", element: < Wishlist/>,
//    },
//     {
//     path: "/adminlogin", element: < AdminLogin/>,
//    }
//    ,
//    {
//     path: "/adminHome", element: < AdminProducts/>,
//    },

//    {
//     path: "/edit-product/:id", element: < AdminProducts/>,
//    },
//    {
//     path: "/return-policy", element: <Policy/>,
//    },
//    {
//     path:"/register",element:<Register/>
//    }
//    ,
//    {
//      path:"/dashboard",element:<Dashboad/>
//     },
//     {
//       path:"/myaccount",element:<MyAccount/>
//      }




//   // { path: "/:pid", element: <Showmore /> },
//   // { path: "/Login", element: <Login /> },
//   // { path: "/Signup", element: <Signup /> },
//   // { path: "/showmore", element: <Showmore /> },
//   // {
//   //   path: "/", element: <Home />,
//   //   children: [
//   //     { path: "Login", element: <Login /> },
//   //     { path: "Signup", element: <Signup /> }
//   //   ]
//   // }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cartprovider>

      <Provider store={store}>
      <RouterProvider router={router}  />
    </Provider>
    </Cartprovider>

  </React.StrictMode>
)
