import { useState } from 'react'
import API from '../services/api'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    await API.post('/auth/register', {
      name,
      email,
      password
    })

    alert('Registration Success')
  }

  return (
    <form onSubmit={handleRegister} className='form'>
      <h2>Register</h2>

      <input
        type='text'
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type='email'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Register</button>
    </form>
  )
}

export default Register