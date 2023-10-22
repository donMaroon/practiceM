import {useState} from 'react'
import Home from './Home'
import { redirect } from 'react-router-dom'

const SignIn = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const getEmail = localStorage.getItem('emailData')
    const getName = localStorage.getItem('nameData')
    const getPassword = localStorage.getItem('passwordData')
    const handleLogin = () => {
        if (name === 'mildred' && password === '123456' && email === 'mildred@gmail.com') {
          localStorage.setItem('nameData', 'mildred')
          localStorage.setItem('emailData', 'mildred@gmail.com')
          localStorage.setItem('passwordData', '123456')
          if(getEmail&&getName&&getPassword) {
            return redirect('/')
          }
        }
      };

  return (
    <div>
         {/* {
         getEmail&&getName&&getPassword ? <redirect to="/home" />
         :  */}
          <div>
            <div>
            <input 
                type="text" 
                placeholder='Name' 
                value={name}
                onChange={(e) => setName(event.target.value)}
            />
            </div>
            <div>
            <input 
            type="email" 
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(event.target.value)}/>
            </div>
            <div>
            <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(event.target.value)}/>
            </div>
            <button onClick={handleLogin} style={{ padding: '13px 148px'}}>Login</button>
            </div>
      
{/* } */}
    </div>
  )
}

export default SignIn
