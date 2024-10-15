import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// a bit complicated router --- by array

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       }
//     ]
//   }
// ])



//another method by using createRoutesFromElements method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* dynamic values from url ':id'  use params*/}
      <Route path='user/:userid' element={<User />} />
      {/* API cALLS - loader*/}
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}

      />
    </Route>
  )
)





createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //wrapper */}
    <RouterProvider router={router} />
  </StrictMode>,
)
