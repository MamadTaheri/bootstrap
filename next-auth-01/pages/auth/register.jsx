import React from "react";

const RegisterPage = () => {
   return (
      <div className="container">
         <div className="row justify-content-center mt-5">
            <div className="col-md-4">
               <form>
                  <div className="mb-3">
                     <label htmlFor="name" className="form-label">
                        Name
                     </label>
                     <input type="text" className="form-control" id="name" autoComplete="off" />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="email" className="form-label">
                        Email address
                     </label>
                     <input type="email" className="form-control" id="email" autoComplete="off" />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="password" className="form-label">
                        Password
                     </label>
                     <input type="password" className="form-control" id="password" />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="confirm" className="form-label">
                        Confirm Password
                     </label>
                     <input type="password" className="form-control" id="confirm" />
                  </div>

                  <button type="submit" className="btn btn-primary">
                     Register
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default RegisterPage;
