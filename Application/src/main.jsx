import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
// import App from './App.jsx'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Joke from './pages/Joke.jsx'
// import Home from './pages/Home.jsx'
// import Notfound from './pages/Notfound.jsx'

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   }
//   // ,
//   // {
//   //   path: '/jokes',
//   //   element: <Joke />
//   // }, {
//   //   path: "*",
//   //   element: <Notfound />
//   // }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     < RouterProvider router={route} />
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
