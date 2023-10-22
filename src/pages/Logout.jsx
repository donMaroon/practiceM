import { Link } from "react-router-dom"

const Logout = () => {
    const getEmail = localStorage.getItem('emailData')
    const getName = localStorage.getItem('nameData')
    const getPassword = localStorage.getItem('passwordData')
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div>
        {
            !getEmail&&!getName&&!getPassword ? <h2>
                Go back to <Link to="/">Home</Link>
            </h2> :
            <div>
                <h2>Welcome Mildred</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        }
    </div>
  )
}

export default Logout
