import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import { publicRoutes } from './routes/publicRoutes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {
          publicRoutes.map((route, index) => <Route key={index} path={route.path} element={<route.Component></route.Component>}></Route>)
        }
      </Routes>
    </div>
  );
}

export default App;
