import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
   useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
   }, []);

   return (
      <>
         <Header />
         <Component {...pageProps} />
      </>
   );
}
