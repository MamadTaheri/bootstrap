import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "@/context/AuthContext";

export default function App({ Component, pageProps }) {
   useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
   }, []);

   return (
      <AuthContextProvider>
         <Header />
         <Component {...pageProps} />
         <ToastContainer />
      </AuthContextProvider>
   );
}
