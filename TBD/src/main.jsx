import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import App from './App'
import {Home, Blogs, Plan, Profile, Login, Signup, Contact, About} from './components/pages/pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='blogs' element={<Blogs />}/>
      <Route path='plan' element={<Plan />}/>
      <Route path='profile' element={<Profile />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='about' element={<About />}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
