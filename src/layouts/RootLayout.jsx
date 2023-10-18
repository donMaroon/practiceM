import { NavLink, Outlet } from "react-router-dom"
const getEmail = localStorage.getItem('emailData')
const getName = localStorage.getItem('nameData')
const getPassword = localStorage.getItem('passwordData')
const Rootlayout = () => {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>Mildred</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="count">Counter</NavLink>
          {
            getEmail&&getName&&getPassword ? <NavLink to="logout">Mildred</NavLink> :
            <NavLink to="signin">Sign-In</NavLink>
          }
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Rootlayout
