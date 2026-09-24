import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({email,password})
        navigate('/')
    }

    if(loading){
        return (<main><h1>Loading.......</h1></main>)
    }


 return (
  <main className="auth-page">
    <div className="bg-circle circle-one"></div>
    <div className="bg-circle circle-two"></div>

    <div className="login-wrapper">

      <div className="hero">
        <h1>PrepMate</h1>
        <p>AI-Powered Interview Preparation</p>
        <span>
          Upload your resume, compare it with any job description,
          generate interview questions, discover skill gaps,
          and prepare with AI.
        </span>
      </div>

      <div className="form-container">

        <div className="brand">
          <h2>Welcome Back</h2>
          <p>Login to continue</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
  <label>Email</label>

  <div className="input-wrapper">
    <FiMail className="input-icon" />

    <input
      type="email"
      placeholder="Enter your email"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
</div>

         <div className="input-group">
  <label>Password</label>

  <div className="input-wrapper">
    <FiLock className="input-icon" />

    <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
    />

    <button
        type="button"
        className="eye-btn"
        onClick={() => setShowPassword(!showPassword)}
    >
        {showPassword ? <FiEyeOff /> : <FiEye />}
    </button>
</div>
</div>
          <button className="button primary-button">
            Login
          </button>

        </form>

        <p className="footer-text">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>

    </div>
  </main>
);
}

export default Login