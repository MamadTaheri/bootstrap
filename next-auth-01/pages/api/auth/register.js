export default async function handler(req, res) {
   if (req.method === "POST") {
      try {
         const response = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify({
               name: req.body.name,
               email: req.body.email,
               password: req.body.password,
               c_password: req.body.confirmPassword,
            }),
         });

         const data = await response.json();
         console.log(data);
         if (response.ok) {
            res.status(200).json({ user: data.user });
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
