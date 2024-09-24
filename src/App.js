import React ,{ lazy ,Suspense}from 'react';
import ReactDOM from 'react-dom/client';
 import Header from './Components/Header';
 import Body from './Components/Body';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact';
import Error from './Components/Error';
import About from './Components/About';
import ResMenu from './Components/ResMenu';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import Cart from './Components/Cart';
           
 const Myapp=()=>{
    return (
      < Provider store={appStore}>
      <>
       <Header/>
       <Outlet/>
       </>
       </Provider>
    )
 }

 const Grocery = lazy(()=> import('./Components/Grocery'));

 const appRouter = createBrowserRouter([   //createBrowerRouter([{   path and element, children:[{}]   }])
   {
      path: '/',
      element:<Myapp/>,
      children:[
         {
            path:'/',
            element:<Body/>,
         },
         {
            path:'/grocery',
            element:<Suspense fallback={<h1>Loading................</h1>}><Grocery/></Suspense>
         },
         {
            path: '/about',
            element:<About/>,
            
         },
         {
            path: '/contact',
            element:<Contact/>,
            
         },
         {
            path:'/indore/:id',
            element:<ResMenu/>,
         },
         {
            path:'/cart',
            element:<Cart/>,
         },
      ],
      errorElement:<Error/>,
   },
   
 ])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);