
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cartprovider from './cartprovider'
import { Provider } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'
import store from './stores/stores.js'
import LoadingSpinner from "./components/loaderSpinner.jsx"

const NotFound = lazy(() => import('@/NotFound'));
const App = lazy(() => import('./App'));
const AddProduct = lazy(() => import('@/AddProduct'));
const ProductDetails = lazy(() => import('@/ProductDetails'));
const Cart = lazy(() => import('@/Cart'));
const PaystackComponent = lazy(() => import('../src/payStack/paystack'));
const Wishlist = lazy(() => import('@/Wishlist'));
const AdminProducts = lazy(() => import('@/AdminProducts'));
const Policy = lazy(() => import('@/Policy'));
const Register = lazy(() => import('@/Register'));
const Dashboard = lazy(() => import('@/Dashboard'));
const MyAccount = lazy(() => import('@/MyAccount'));
const AccountSettings = lazy(() => import('@/AccountSettings'));
const Login = lazy(() => import('@/Login'));



const router = createBrowserRouter([
  { path: "*", element: <Suspense fallback={<LoadingSpinner/>}><NotFound /></Suspense> },
  { path: "/", element: <Suspense fallback={<LoadingSpinner/>}><App /></Suspense> },
  {
    path: "/home",
    element: <Suspense fallback={<LoadingSpinner/>}><App /></Suspense>,
  },
  {
    path: "/addproduct",
    element: (
      <Suspense fallback={<LoadingSpinner/>}>
        <ProtectedRoute roles={['admin']}>
          <AddProduct />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: "/ProductDetails/:product_id",
    element: <Suspense fallback={<LoadingSpinner/>}><ProductDetails /></Suspense>,
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<LoadingSpinner/>}>
        <Cart />
      </Suspense>
    ),
    children: [
      { path: "paystack", element: <Suspense fallback={<LoadingSpinner/>}><PaystackComponent /></Suspense> },
    ],
  },
  { path: "paystack", element: <Suspense fallback={<LoadingSpinner/>}><PaystackComponent /></Suspense> },
  {
    path: "/wishlist",
    element: (
      <Suspense fallback={<LoadingSpinner/>}>
        <Wishlist />
      </Suspense>
    ),
  },
  {
    path: "/adminHome",
    element: (
      <Suspense fallback={<LoadingSpinner/>}>
        <ProtectedRoute roles={['admin']}>
          <AdminProducts />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: "/edit-product/:id",
    element: (
      <Suspense fallback={<LoadingSpinner/>}>
        <ProtectedRoute roles={['admin']}>
          <AdminProducts />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  { path: "/return-policy", element: <Suspense fallback={<LoadingSpinner/>}><Policy /></Suspense> },
  { path: "/register", element: <Suspense fallback={<LoadingSpinner/>}><Register /></Suspense> },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<LoadingSpinner/>}>
        <ProtectedRoute roles={['user']}>
          <Dashboard />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: "/myaccount",
    element: (
      <Suspense fallback={<LoadingSpinner/>}>
        <ProtectedRoute roles={['user']}>
          <MyAccount />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      { index: true, element: <Suspense fallback={<LoadingSpinner/>}><Dashboard /></Suspense> },
      { path: "dashboard", index: true, element: <Suspense fallback={<LoadingSpinner/>}><Dashboard /></Suspense> },
      { path: "settings", element: <Suspense fallback={<LoadingSpinner/>}><AccountSettings /></Suspense> },
    ]
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingSpinner/>}>
        <Login />
      </Suspense>
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

  </React.StrictMode>
)


















// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import './App.css'
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import ProtectedRoute from './components/ProtectedRoute'
// import Cartprovider from './cartprovider'
// import AddProduct from '@/AddProduct.jsx'
// import ProductDetails from '@/ProductDetails'
// import Cart from '@/Cart'
// import { Provider } from 'react-redux'
// import store from './stores/stores.js'
// import Wishlist from '@/Wishlist'
// import PaystackComponent from '../src/payStack/paystack'
// import AdminProducts from '@/AdminProducts'
// import NotFound from '@/NotFound'
// import Policy from '@/Policy'
// import Register from '@/Register'
// import MyAccount from '@/MyAccount'
// import Dashboard from '@/Dashboard'
// import Login from '@/Login'
// import Accountsettings from '@/AccountSettings'

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
//     path: "/wishlist",
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
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Cartprovider>
//       <Provider store={store}>
//       <RouterProvider router={router}  />
//     </Provider>
//     </Cartprovider>
//   </React.StrictMode>)




















// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { RouterProvider } from 'react-router-dom';
// import store from "./stores/stores.js"
// import router from './router';
// import CartProvider from './cartprovider';
// import './index.css';
// import './App.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CartProvider>
//       <Provider store={store}>
//         <Suspense fallback={<LoadingSpinner/>}>
//           <RouterProvider router={router} />
//         </Suspense>
//       </Provider>
//     </CartProvider>
//   </React.StrictMode>
// );







































// import AddProduct from '@/addProduct'
// import ProductDetails from '@/productDetails'
// import Cart from '@/cart'
// import { Provider } from 'react-redux'
// import Wishlist from '@/whishlist'
// import PaystackComponent from '../src/payStack/paystack'
// import AdminProducts from '@/adminproducts'
// import NotFound from '@/NotFound'
// import Policy from '@/policy'
// import Register from '@/Register'
// import MyAccount from '@/myAccount'
// import ProtectedRoute from './components/protectedRoute.js'
// import Dashboard from '@/dashboad'
// import Login from '@/Login'
// import Accountsettings from '@/accountsettings'
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



