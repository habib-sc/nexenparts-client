import AddReview from "../components/Pages/Dashboard/AddReview";
import MyOrders from "../components/Pages/Dashboard/MyOrders";
import MyProfile from "../components/Pages/Dashboard/MyProfile";

export const dashboardRoutes = [
    { path: '/dashboard/my-orders', name: 'MyOrders', Component: MyOrders }, 
    { path: '/dashboard/add-review', name: 'AddReview', Component: AddReview }, 
    { path: '/dashboard/my-profile', name: 'Purchase', Component: MyProfile }, 
];