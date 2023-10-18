import { 
  createBrowserRouter,  
  Route, 
  createRoutesFromElements,
  RouterProvider,
  Navigate
 } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Rootlayout from "./layouts/RootLayout"
import HelpLayout from './layouts/HelpLayout'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import CareersLayout from './layouts/CareersLayout'
import Careers from './pages/careers/Careers'
import SignIn from './pages/SignIn'
import Counter from './pages/Counter'
import Logout from './pages/logout'
const getEmail = localStorage.getItem('emailData')
const getName = localStorage.getItem('nameData')
const getPassword = localStorage.getItem('passwordData')

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={<Rootlayout/>}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='help' element={<HelpLayout />}>
            {/* Nested Routing */}
            <Route path='faq' element={<Faq/>}/>
            <Route path='contact' element={<Contact />}/>
          </Route>
          <Route path='careers' element={<CareersLayout />}>
            <Route index element={<Careers />} />
          </Route>
          <Route path='signin' element={getEmail&&getName&&getPassword? <Navigate to="/product"/> : <SignIn />} />
          <Route path='logout' element={<Logout />} />
          <Route path='count' element={<Counter />} />
          <Route path='*' element={<NotFound />} />
        </Route>
  )
)


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
