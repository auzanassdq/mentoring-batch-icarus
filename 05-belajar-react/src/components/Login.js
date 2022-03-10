import { useState } from "react";

function Login() {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value
    })
  };

  const handleLogin = () => {
    console.log(userLogin);
    console.log(JSON.stringify(userLogin));
    localStorage.setItem("userLogin", JSON.stringify(userLogin))
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
        value={userLogin.username}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        value={userLogin.password}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
