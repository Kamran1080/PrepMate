import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import "../auth.form.scss";

import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleRegister({
      username,
      email,
      password,
    });

    navigate("/");
  };

  if (loading) {
    return (
      <main className="auth-page">
        <h1 style={{ color: "white" }}>Loading...</h1>
      </main>
    );
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
            Create your account and start preparing for interviews
            with AI-powered resume analysis, personalized reports,
            interview questions, and career guidance.
          </span>
        </div>

        <div className="form-container">
          <div className="brand">
            <h2>Create Account</h2>
            <p>Join PrepMate</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>

              <div className="input-wrapper">
                <FiUser className="input-icon" />

                <input
                  type="text"
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

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
              Register
            </button>
          </form>

          <p className="footer-text">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;