import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";

const RegisterPage = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const { register, error, loading } = useContext(AuthContext);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (name === "" || email === "" || password === "") {
         toast.error("Please fill all fielsds");
         return;
      }
      if (password !== confirmPassword) {
         toast.error("Password does not match");
         return;
      }

      const newUser = { name, email, password, confirmPassword };
      register(newUser);
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
                     <label htmlFor="name" className="form-label">
                        Name
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="name"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>
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
                  <div className="mb-3">
                     <label htmlFor="confirm" className="form-label">
                        Confirm Password
                     </label>
                     <input
                        type="password"
                        className="form-control"
                        id="confirm"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />
                  </div>

                  <button type="submit" disabled={loading} className="btn btn-primary">
                     Register
                     {loading && <div className="spinner-border spinner-border-sm ms-4 "></div>}
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default RegisterPage;
