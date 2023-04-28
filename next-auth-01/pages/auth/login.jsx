import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";

const LoginPage = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const { login, error, loading } = useContext(AuthContext);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (email === "" || password === "") {
         toast.error("Please fill all fielsds");
         return;
      }

      const userData = { email, password };
      login(userData);
   };

   useEffect(() => {
      if (error) {
         toast.error(error, "useEffecct");
      }
   }, [error]);

   return (
      <div className="container">
         <div className="row justify-content-center mt-5">
            <div className="col-md-4">
               <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                     <label htmlFor="email" className="form-label">
                        Email address
                     </label>
                     <input
                        type="email"
                        className="form-control"
                        id="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="password" className="form-label">
                        Password
                     </label>
                     <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>

                  <button type="submit" disabled={loading} className="btn btn-primary">
                     Login
                     {loading && <div className="spinner-border spinner-border-sm ms-4 "></div>}
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default LoginPage;
