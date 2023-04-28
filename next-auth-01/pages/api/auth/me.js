export default async function handler(req, res) {
   if (req.method === "GET") {
      if (!req.cookies.token) {
         res.status(403).json({ message: { err: ["Not Authorized"] } });
         return;
      }
      try {
         const response = await fetch("http://localhost:8000/api/me", {
            method: "GET",
            headers: {
               Authorization: `Bearer ${req.cookies.token}`,
            },
         });

         const data = await response.json();

         if (response.ok) {
            res.status(200).json({ user: data.user });
         } else {
            res.status(response.status).json({ message: data });
         }
      } catch (e) {
         res.status(500).json({ message: { err: ["User Forbidden"] } });
      }
   } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
   }
}
