import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import RequireAuth from './components/Auth/RequireAuth';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
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
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          {
            dashboardRoutes.map(({path, Component}, index) => <Route key={index} path={path} element={
            <RequireAuth>
              <Component></Component>
            </RequireAuth>
            }></Route>)
          }
        </Route>
        
        
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
