import React, { useState } from 'react';
import "./Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}auth/login`, { email, password });
      localStorage.setItem("token", response.data.token); // Store JWT Token
      toast.success("Login Successfully", {
        position: "top-right",
      });
      navigate("/product"); // Redirect to product page after login
    } catch (err) {

      setError(err?.response?.data?.message || "Something went wrong");

    }
  }

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}

        <div className='input-group'>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='input-group'>
          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
