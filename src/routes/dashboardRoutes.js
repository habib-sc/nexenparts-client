import AddReview from "../components/Pages/Dashboard/AddReview";
import MyOrders from "../components/Pages/Dashboard/MyOrders";
import MyProfile from "../components/Pages/Dashboard/MyProfile";
import Payment from "../components/Pages/Dashboard/Payment";

export const dashboardRoutes = [ 
    { path: '/dashboard/my-orders', name: 'MyOrders', Component: MyOrders }, 
    { path: '/dashboard/add-review', name: 'AddReview', Component: AddReview }, 
    { path: '/dashboard/my-profile', name: 'Purchase', Component: MyProfile }, 
    { path: '/dashboard/payment/:id', name: 'Purchase', Component: Payment }, 
];