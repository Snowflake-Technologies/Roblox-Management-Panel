import { useState } from "react";
import { login } from "../api";

export default function Login({ onLogin }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const res = await login(email, password);

    if (res.user) {
      onLogin(res.user);
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>SnowPanel Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}