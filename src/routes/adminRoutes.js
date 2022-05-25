import AddProduct from "../components/Pages/Dashboard/Admin/AddProduct";
import AllOrders from "../components/Pages/Dashboard/Admin/AllOrders";
import AllProducts from "../components/Pages/Dashboard/Admin/AllProducts";
import AllUsers from "../components/Pages/Dashboard/Admin/AllUsers";


export const adminRoutes = [ 
    { path: '/dashboard/all-orders', name: 'AllOrders', Component: AllOrders }, 
    { path: '/dashboard/all-products', name: 'AllProducts', Component: AllProducts }, 
    { path: '/dashboard/all-users', name: 'AllUsers', Component: AllUsers}, 
    { path: '/dashboard/add-product', name: 'AddProduct', Component: AddProduct }, 
];