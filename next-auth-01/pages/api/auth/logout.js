import cookie from "cookie";

export default async function handler(req, res) {
   if (req.method === "POST") {
      try {
         const response = await fetch("http://localhost:8000/api/logout", {
            method: "POST",
            headers: {
               Authorization: `Bearer ${req.cookies.token}`,
            },
         });

         const data = await response.json();
         console.log(data);
         if (response.ok) {
            res.setHeader(
               "Set-Cookie",
               cookie.serialize("token", "", {
                  httpOnly: true,
                  expires: new Date(0),
                  path: "/",
               })
            );

            res.status(200).json({ message: "Success" });
         } else {
            res.status(response.status).json({ message: data });
         }
      } catch (e) {
         console.log(e.message);
         res.status(500).json({ message: { err: ["Server Error"] } });
      }
   } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
   }
}
