import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Footer } from "../Footer";
import { TopNav } from "../Navbar";



const Login = () => {

 

  const { loginUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
    
  };

return (
  <>
  <section>
    <TopNav/>
  

  <h1>Login</h1>

  <form onSubmit={handleSubmit}>
    <section>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="username" placeholder="Enter Username"/>
    <label htmlFor="username">Enter Username</label>
  </div>
  <div className="form-floating mb-3">
    <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
    <label htmlFor="Password">Enter Password</label>
  </div>

  <div>
  <button type="submit" className="btn btn-primary">Login</button>
  </div>

  </section>

  </form>


  <Footer/>
  </section>
  
  
  </>
  
)
  
  

  // return (
  //   <section>
  //     <form onSubmit={handleSubmit}>
  //       <h1>Login </h1>
  //       <hr />
  //       <label htmlFor="username">Username</label>
  //       <input type="text" id="username" placeholder="Enter Username" />
  //       <label htmlFor="password">Password</label>
  //       <input type="password" id="password" placeholder="Enter Password" />
  //       <button type="submit">Login</button>
  //     </form>
  //   </section>
//   );
// };

}

export default Login;