import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Footer } from "../Footer";
import { TopNav } from "../Navbar";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
    <section>
      <TopNav/>
      <form onSubmit={handleSubmit}>
        <section>
        <h1>Register</h1>
        <div className="form-floating mb-3">
    <input type="username" className="form-control" id="username" placeholder="Username" onChange={e => setUsername(e.target.value)} required/>
    <label htmlFor="username">Username</label>
        </div>
        
        <div className="form-floating mb-3">
    <input type="password" className="form-control" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
    <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating mb-3">
    <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" onChange={e => setPassword2(e.target.value)} required/>
    <label htmlFor="confirm-password">Confirm Password</label>
          <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
       <Link to={'/login'}><button className="btn btn-primary" onClick={handleSubmit}>Register</button></Link>
       </section>
      </form>
      <Footer/>
    </section>
  );
}

export default Register;