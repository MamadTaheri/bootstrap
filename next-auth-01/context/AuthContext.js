import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   useEffect(() => {
      checkUserLoggedIn();
   }, []);

   const handleErrors = (message) => {
      const errors = [];
      Object.keys(message).map((key) => {
         message[key].map((e) => {
            errors.push(e);
         });
      });
      return errors.join();
   };

   // Register user
   const register = async (user) => {
      setError(null);
      setLoading(true);
      const res = await fetch("/api/auth/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify(user),
      });
      const data = await res.json();
      if (res.ok) {
         setLoading(false);
         router.push("/auth/login");
      } else {
         setError(handleErrors(data.message));
         setLoading(false);
      }
   };

   // Login user
   const login = async (user) => {
      setError(null);
      setLoading(true);
      const res = await fetch("/api/auth/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify(user),
      });
      const data = await res.json();
      if (res.ok) {
         setLoading(false);
         setUser(data.user);
         router.push("/");
      } else {
         setError(handleErrors(data.message));
         setLoading(false);
      }
   };

   // Logout user
   const logout = async () => {
      setError(null);
      const res = await fetch("/api/auth/logout", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
      });
      const data = await res.json();

      if (res.ok) {
         setUser(null);
         router.push("/");
      } else {
         setError(handleErrors(data.message));
      }
   };

   // Check if user logged in
   const checkUserLoggedIn = async (user) => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      if (res.ok) {
         setUser(data.user);
      } else {
         setUser(null);
      }
   };

   return (
      <AuthContext.Provider value={{ user, error, loading, register, login, logout, checkUserLoggedIn }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContextProvider;
