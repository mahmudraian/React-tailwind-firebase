import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Privateroutes from './Components/routes/Privateroutes';
import Order from './Components/Orders.js/Order';

function App() {
  const router= createBrowserRouter([
{path:"/",element:<Main></Main>,children:[

  {
    path:"/login",element:<Login></Login>
  },
  {
    path:"/register",element:<Register></Register>
  },
  {
    path:'/orders',element:<Privateroutes><Order></Order></Privateroutes>
  },
  {
    path:"/home",element:<Home></Home>
  }
]}

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      
    </div>
  );
}

export default App;
