import { createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
   // Register user
   const register = async (user) => {
      console.log(user);
   };

   // Login user
   const login = async (user) => {
      console.log(user);
   };

   // Logout user
   const logout = async () => {
      console.log("logout");
   };

   // Check if user logged in
   const checkUserLoggedIn = async () => {
      console.log("logout");
   };

   return (
      <AuthContext.Provider value={{ register, login, logout, checkUserLoggedIn }}>{children}</AuthContext.Provider>
   );
};

export default AuthContextProvider;
