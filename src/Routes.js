// import React ,{lazy,Suspense,Fragment} from "react";
// import {Switch,Redirect,Route} from 'react-router-dom'

// const routesConfig = [
//     {
//         exact:true,
//         path:'/',
//         component : () => <Redirect to="/login"/>
//     },
//     {
//         exact : true,
//         path:'/404',
//         component:lazy(()=>import('../src/pages/Error'))
//     },
//     {
//         exact:true,
//         path:'/login',
//         component:lazy(()=>import('../src/pages/login'))
//     },
//     {
//         exact:true,
//         path:'/register',
//         component:lazy(()=>import('../src/pages/signup'))
//     }
// ]

// const renderRoutes = (routes) => (routes ? (
//     // <Suspense fallback={}/>
//     <Switch>
//         {
//             routes.map((route,i)=>{
//                 const Guard = route.guard
//             })
//         }
//     </Switch>
// ) )