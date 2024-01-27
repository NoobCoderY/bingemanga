import React, { useState } from 'react'
import './Login.scss'

interface FormData {
  email: string
  password: string
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // You can add your logic for handling the form data here
    console.log('Form data submitted:', formData)
  }
  return (
    <div className="login_form_container">
      <div className="form__box">
        <p>Sign In</p>

        <form className='login__form' action="submit" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Email'
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Password'
            required
          />
          <button type="submit">Login</button>
          <p>Forgot Password?</p>
        </form>
      </div>
    </div>
  )
}

export default Login
