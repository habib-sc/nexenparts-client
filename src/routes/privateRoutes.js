import Dashboard from "../components/Pages/Dashboard/Dashboard";
import Purchase from "../components/Pages/Purchase/Purchase";

export const privateRoutes = [
    { path: '/dashboard', name: 'Dashboard', Component: Dashboard }, 
    { path: '/purchase', name: 'Purchase', Component: Purchase }, 
];