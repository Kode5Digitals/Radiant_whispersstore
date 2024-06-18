import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute.jsx'
// import Cartprovider from './cartprovider.jsx'
import AddProduct from './pages/AddProduct.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import { Provider } from 'react-redux'
import store from './stores/stores.js'
import Wishlist from './pages/Wishlist.jsx'
import PaystackComponent from '../src/payStack/paystack.jsx'
import AdminProducts from './pages/AdminProducts.jsx'
import NotFound from './pages/NotFound.jsx'
import Policy from './pages/Policy.jsx'
import Register from './pages/Register.jsx'
import MyAccount from './pages/MyAccount.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Accountsettings from './pages/AccountSettings.jsx'

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
      <ProtectedRoute roles={['admin']}>
  <AddProduct />
      </ProtectedRoute>
      
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
      <ProtectedRoute roles={['admin']}>
        <AdminProducts />
      </ProtectedRoute>

    ),
  },
  { path: "/return-policy", element: <Policy /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute roles={['user']}>
   <Dashboard/>
      </ProtectedRoute>
    ),
  },
  {

    path: "/myaccount",
    element: (
      <ProtectedRoute roles={['user']}>
        <MyAccount />

      </ProtectedRoute>

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
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cartprovider>
      <Provider store={store}>
      <RouterProvider router={router}  />
    </Provider>
    </Cartprovider>
  </React.StrictMode>)




















// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { RouterProvider } from 'react-router-dom';
// import store from "./stores/stores.js"
// import router from './router.jsx';
// import CartProvider from './cartprovider.jsx';
// import './index.css';
// import './App.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CartProvider>
//       <Provider store={store}>
//         <Suspense fallback={<div>Loading...</div>}>
//           <RouterProvider router={router} />
//         </Suspense>
//       </Provider>
//     </CartProvider>
//   </React.StrictMode>
// );







































// import React, { lazy, Suspense } from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import './App.css'
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Cartprovider from './cartprovider.jsx'
// // export { default as NotFound } from "./pages/NotFound.jsx";
// import AddProduct from './pages/addProduct.jsx'
// import ProductDetails from './pages/productDetails.jsx'
// import Cart from './pages/cart.jsx'
// import { Provider } from 'react-redux'
// import store from './stores/stores.js'
// import Wishlist from './pages/whishlist.jsx'
// import PaystackComponent from '../src/payStack/paystack.jsx'
// import AdminProducts from './pages/adminproducts.jsx'
// import NotFound from './pages/NotFound.jsx'
// import Policy from './pages/policy.jsx'
// import Register from './pages/Register.jsx'
// import MyAccount from './pages/myAccount.jsx'
// import ProtectedRoute from './components/protectedRoute.js'
// import Dashboard from './pages/dashboad.jsx'
// import Login from './pages/Login.jsx'
// import Accountsettings from './pages/accountsettings.jsx'

// // const NotFound = lazy(() => import('./pages/NotFound.jsx'));
// const App = lazy(() => import('./App'));
// const AddProduct = lazy(() => import('./pages/addProduct.jsx'));
// const ProductDetails = lazy(() => import('./pages/productDetails.jsx'));
// const Cart = lazy(() => import('./pages/cart.jsx'));
// const PaystackComponent = lazy(() => import('../src/payStack/paystack.jsx'));
// const Wishlist = lazy(() => import('./pages/whishlist.jsx'));
// const AdminProducts = lazy(() => import('./pages/adminproducts.jsx'));
// const Policy = lazy(() => import('./pages/policy.jsx'));
// const Register = lazy(() => import('./pages/Register.jsx'));
// const Dashboard = lazy(() => import('./pages/dashboad.jsx'));
// const MyAccount = lazy(() => import('./pages/myAccount.jsx'));
// const Accountsettings = lazy(() => import('./pages/accountsettings.jsx'));
// const Login = lazy(() => import('./pages/Login.jsx'));
// const ProtectedRoute = lazy(() => import('./components/protectedRoute.js'));



// const router = createBrowserRouter([
//   { path: "*", element: <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense> },
//   { path: "/", element: <Suspense fallback={<div>Loading...</div>}><App /></Suspense> },
//   {
//     path: "/home",
//     element: <Suspense fallback={<div>Loading...</div>}><App /></Suspense>,
//   },
//   {
//     path: "/addproduct",
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <ProtectedRoute roles={['admin']}>
//           <AddProduct />
//         </ProtectedRoute>
//       </Suspense>
//     ),
//   },
//   {
//     path: "/ProductDetails/:product_id",
//     element: <Suspense fallback={<div>Loading...</div>}><ProductDetails /></Suspense>,
//   },
//   {
//     path: "/cart",
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <Cart />
//       </Suspense>
//     ),
//     children: [
//       { path: "paystack", element: <Suspense fallback={<div>Loading...</div>}><PaystackComponent /></Suspense> },
//     ],
//   },
//   { path: "paystack", element: <Suspense fallback={<div>Loading...</div>}><PaystackComponent /></Suspense> },
//   {
//     path: "/whishlist",
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <Wishlist />
//       </Suspense>
//     ),
//   },
//   {
//     path: "/adminHome",
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <ProtectedRoute roles={['admin']}>
//           <AdminProducts />
//         </ProtectedRoute>
//       </Suspense>
//     ),
//   },
//   {
//     path: "/edit-product/:id",
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <ProtectedRoute roles={['admin']}>
//           <AdminProducts />
//         </ProtectedRoute>
//       </Suspense>
//     ),
//   },
//   { path: "/return-policy", element: <Suspense fallback={<div>Loading...</div>}><Policy /></Suspense> },
//   { path: "/register", element: <Suspense fallback={<div>Loading...</div>}><Register /></Suspense> },
//   {
//     path: "/dashboard",
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <ProtectedRoute roles={['user']}>
//           <Dashboard />
//         </ProtectedRoute>
//       </Suspense>
//     ),
//   },
//   {
//     path: "/myaccount",
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <ProtectedRoute roles={['user']}>
//           <MyAccount />
//         </ProtectedRoute>
//       </Suspense>
//     ),
//     children: [
//       { index: true, element: <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense> },
//       { path: "dashboard", index: true, element: <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense> },
//       { path: "settings", element: <Suspense fallback={<div>Loading...</div>}><Accountsettings /></Suspense> },
//     ]
//   },
//   {
//     path: "/login",
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <Login />
//       </Suspense>
//     ),
//   },
// ]);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Cartprovider>
//       <Provider store={store}>
//       <RouterProvider router={router}  />
//     </Provider>
//     </Cartprovider>

//   </React.StrictMode>
// )




// const router = createBrowserRouter([
//   { path: "*", element: <NotFound /> },
//   { path: "/", element: <App /> },
//   {
//     path: "/home",
//     element: 
//         <App />
//     ,
//   },
//   {
//     path: "/addproduct",
//     element: (
//       <ProtectedRoute roles={['admin']}>
//   <AddProduct />
//       </ProtectedRoute>
      
//     ),
//   },
//   {
//     path: "/ProductDetails/:product_id",
//     element: <ProductDetails />,
//   },
//   {
//     path: "/cart",
//     element: (
//         <Cart />
//     ),
//     children: [
//       { path: "paystack", element: <PaystackComponent /> },
//     ],
//   },
//   { path: "paystack", element: <PaystackComponent /> },
//   {
//     path: "/whishlist",
//     element: (
//         <Wishlist />
//     ),
//   },
//   {
//     path: "/adminHome",
//     element: (
//       <ProtectedRoute roles={['admin']}>
//         <AdminProducts />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/edit-product/:id",
//     element: (
//       <ProtectedRoute roles={['admin']}>
//         <AdminProducts />
//       </ProtectedRoute>

//     ),
//   },
//   { path: "/return-policy", element: <Policy /> },
//   { path: "/register", element: <Register /> },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute roles={['user']}>
//    <Dashboard/>
//       </ProtectedRoute>
      
     
//     ),
//   },
//   {
    
//     path: "/myaccount",
//     element: (
//       <ProtectedRoute roles={['user']}>
//         <MyAccount />

//       </ProtectedRoute>

//     ),
//     children: [
//                 {index:true, element: <Dashboard/> },
//                 { path: "dashboard",index:true, element: <Dashboard/> },
//                 { path: "settings", element: <Accountsettings/> },
//               ]
//   },
//   {
//     path: "/login",
//     element: (
//         <Login/>
//     ),
//   },
// ]);



