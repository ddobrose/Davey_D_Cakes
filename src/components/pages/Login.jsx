// import { useContext } from "react";
// import AuthContext from "../../context/AuthContext";
import { Footer } from "../Footer";
import { TopNav } from "../Navbar";


const Login = () => {

return (
  <>
  <section>
    <TopNav/>
  <h1>USERS COMING SOON</h1>
  <h6>Dont you wish you had your own DaveyDCakes Account where you could earn points and keep track of your purchases? Well hold onto your pants because its coming soon!!!</h6>
  <Footer/>
  </section>
  
  
  </>
  
)
//   const { loginUser } = useContext(AuthContext);
//   const handleSubmit = e => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const password = e.target.password.value;
//     username.length > 0 && loginUser(username, password);
//   };

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <h1>Login </h1>
//         <hr />
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" placeholder="Enter Username" />
//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" placeholder="Enter Password" />
//         <button type="submit">Login</button>
//       </form>
//     </section>
//   );
// };

}

export default Login;