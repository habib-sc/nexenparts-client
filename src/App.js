import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './components/Auth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
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

        {/* Private Routes  */}
        {
          privateRoutes.map(({path, Component}, index) => <Route key={index} path={path} element={
          <RequireAuth>
            <Component></Component>
          </RequireAuth>
          }></Route>)
        }
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
