import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Layout from './layout/Layout';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Components/Login';
import Register from './Components/Register';
import Error from './Components/Error';
import AddData from './pages/AddData';
import CardDetails from './pages/CardDetails';
import AllVolunteer from './pages/AllVolunteer';
import MyCard from './pages/MyCard';
import Request from './pages/Request';
import Update from './pages/Update';
// import MyCard from './pages/MyCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'addData',
        element: <AddData></AddData>
      }
      ,
      {
        path: '/volunteerInfo/:id',
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/volunteerInfo/${params.id}`)
      },
      {
        path: '/allVolunteer',
        element: <AllVolunteer></AllVolunteer>,
        loader: () => fetch('http://localhost:5000/volunteerInfo')
      },
      {
        path: '/myCard',
        element: <MyCard></MyCard>
      },
      {
        path: '/request',
        element: <Request></Request>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) =>fetch(`http://localhost:5000/volunteerInfo/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
)
