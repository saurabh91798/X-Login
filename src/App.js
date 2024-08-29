import { useState } from "react";
import "./App.css";

export default function App() {
  const [obj, setObj] = useState({ username: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    console.log(e.target.id);
    const { id, value } = e.target;
    const newObj = { ...obj, [id]: value };
    setObj(newObj);
    console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.username === "user" && obj.password === "password") {
      setErr("");
      setIsSubmitted(true);
    } else {
      setErr("Invalid username or password");
      setIsSubmitted(false);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {obj.username}!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {err && <p className="err">{err}</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={obj.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={obj.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
