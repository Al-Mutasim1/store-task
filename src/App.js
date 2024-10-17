
import './App.css';
import Home from './Component/Home/Home'
import {QueryClient, QueryClientProvider} from "react-query"
import { createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom"
import Layout from './Component/Layout/Layout'
import { Toaster } from 'react-hot-toast';


function App() {

  const queryClient = new QueryClient()

 
const routers = createHashRouter([
  {
    path: '/', element: <Layout />, children:
      [
        { index: true, element: <Home /> },
      
      ]
  }
])

  return <QueryClientProvider client={queryClient}>
    <Toaster/>
    <RouterProvider router={routers}></RouterProvider>
  </QueryClientProvider>
}

export default App
