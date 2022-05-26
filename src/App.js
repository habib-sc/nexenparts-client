import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import RequireAdmin from './components/Auth/RequireAdmin';
import RequireAuth from './components/Auth/RequireAuth';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import NotFound from './components/Pages/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import { adminRoutes } from './routes/adminRoutes';
import { dashboardRoutes } from './routes/dashboardRoutes';
import { privateRoutes } from './routes/privateRoutes';
import { publicRoutes } from './routes/publicRoutes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>



        {/* Public Routes  */}
        {
          publicRoutes.map(({path, Component}, index) => <Route key={index} path={path} element={<Component></Component>}></Route>)
        }



        {
          privateRoutes.map(({path, Component}, index) => <Route key={index} path={path} element={
            <RequireAuth>
              <Component></Component>
            </RequireAuth>
          }></Route>)
        }



        {/* Private Dashboard Routes  */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>

          {/* Route for Normal user  */}
          {
            dashboardRoutes.map(({path, Component}, index) => <Route key={index} path={path} element={<Component></Component>}></Route>)
          }

          {/* Routes for Admin user  */}
          {
            adminRoutes.map(({path, Component}, index) => <Route key={index} path={path} element={
              <RequireAdmin>
                <Component></Component>
              </RequireAdmin>
            }></Route>)
          }

        </Route>

        {/* 404 page route */}
        <Route path='*' element={<NotFound></NotFound>}></Route>

        
        
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
