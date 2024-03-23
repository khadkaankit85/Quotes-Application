import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Joke from './pages/Joke'
import Quote from './pages/Quote'
import Notfound from './pages/Notfound'
const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/jokes",
      element: <Joke />
    },
    {
      path: "/advices",
      element: <Quote />
    },
    // {
    //   path: "/insults",
    //   element: <Insults />
    // },
    {
      path: "*",
      element: <Notfound />
    }
  ])

  return (
    <div>
      <div className=''>
        <section className="w-150 border-hidden my-10 mx-auto flex flex-column flex-wrap justify-center items-center">
          <div className="border-solid border border-grey rounded-lg" style={{ height: "800px", width: "360px" }}>

            <RouterProvider router={route} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
