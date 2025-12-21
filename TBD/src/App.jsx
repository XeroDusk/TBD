import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route path='' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='about' element={<About />}/>

      </Route>
    )
  )

  return <RouterProvider router={router} />
}


export default App
