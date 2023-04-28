import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";

const Header = () => {
   const router = useRouter();
   const path = router.pathname;
   const { user } = useContext(AuthContext);

   return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container">
            <Link className="navbar-brand" href="/">
               Next Auth Sample
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <Link className={path == "/" ? "nav-link active" : "nav-link"} href="/">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className={path == "/posts" ? "nav-link active" : "nav-link"} href="/posts">
                        Posts
                     </Link>
                  </li>
               </ul>
               <div className="d-flex">
                  {user ? (
                     <>
                        <span className="mx-3">{user.name}</span>
                        <button className="btn btn-sm btn-outline-success me-2">Logout</button>
                     </>
                  ) : (
                     <>
                        <Link className="btn btn-sm btn-outline-success me-2" href="/auth/login">
                           Login
                        </Link>
                        <Link className="btn btn-sm btn-outline-success" href="/auth/register">
                           Register
                        </Link>
                     </>
                  )}
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Header;
