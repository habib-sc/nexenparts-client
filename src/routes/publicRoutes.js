import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import About from "../components/Pages/About/About";
import Blogs from "../components/Pages/Blogs/Blogs";
import Home from "../components/Pages/Home/Home";
import MyPortfolio from "../components/Pages/MyPortfolio/MyPortfolio";


export const publicRoutes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/register', name: 'Register', Component: Register },
    { path: '/my-portfolio', name: 'MyPortfolio', Component: MyPortfolio },
    { path: '/blogs', name: 'Blogs', Component: Blogs },
];