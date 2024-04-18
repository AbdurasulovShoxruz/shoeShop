import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const App = lazy(() => import('./App'))
const Shoe = lazy(() => import('./pages/Shoe/Shoe'))
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/shoe/:shoeId',
    element: <Shoe/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<p>...Loading</p>}>
    <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
