import  { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';

const NotFound = lazy(() => import('./pages/NotFound'));
const App = lazy(() => import('./App'));
const AddProduct = lazy(() => import('./pages/AddProduct'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import("./pages/Cart"));
const PaystackComponent = lazy(() => import("./payStack/paystack"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const AdminProducts = lazy(() => import('./pages/AdminProducts'));
const Policy = lazy(() => import('./pages/Policy'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const MyAccount = lazy(() => import('./pages/MyAccount'));
const AccountSettings = lazy(() => import('./pages/AccountSettings'));
const Login = lazy(() => import('./pages/Login'));

const router = createBrowserRouter([
  { path: "*", element: <Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense> },
  { path: "/", element: <Suspense fallback={<div>Loading...</div>}><App /></Suspense> },
  {
    path: "/home",
    element: <Suspense fallback={<div>Loading...</div>}><App /></Suspense>,
  },
  {
    path: "/addproduct",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute roles={['admin']}>
          <AddProduct />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: "/ProductDetails/:product_id",
    element: <Suspense fallback={<div>Loading...</div>}><ProductDetails /></Suspense>,
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Cart />
      </Suspense>
    ),
    children: [
      { path: "paystack", element: <Suspense fallback={<div>Loading...</div>}><PaystackComponent /></Suspense> },
    ],
  },
  { path: "paystack", element: <Suspense fallback={<div>Loading...</div>}><PaystackComponent /></Suspense> },
  {
    path: "/wishlist",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Wishlist />
      </Suspense>
    ),
  },
  {
    path: "/adminHome",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute roles={['admin']}>
          <AdminProducts />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: "/edit-product/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute roles={['admin']}>
          <AdminProducts />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  { path: "/return-policy", element: <Suspense fallback={<div>Loading...</div>}><Policy /></Suspense> },
  { path: "/register", element: <Suspense fallback={<div>Loading...</div>}><Register /></Suspense> },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute roles={['user']}>
          <Dashboard />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: "/myaccount",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRoute roles={['user']}>
          <MyAccount />
        </ProtectedRoute>
      </Suspense>
    ),
    children: [
      { index: true, element: <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense> },
      { path: "dashboard", index: true, element: <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense> },
      { path: "settings", element: <Suspense fallback={<div>Loading...</div>}><AccountSettings /></Suspense> },
    ]
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
]);

export default router;
