import React, { useEffect } from "react";
import { toast } from "react-toastify";

const PostsPage = ({ posts, error }) => {
   //
   useEffect(() => {
      if (error) {
         toast.error(error);
      }
   }, [error]);

   return (
      <div className="container mt-5">
         <div className="row g-3">
            {posts &&
               posts.map((post) => (
                  <div key={post.id} className="col-md-12">
                     <div className="card">
                        <div className="card-body">
                           <h5 className="card-title">{post.title}</h5>
                           <h5 className="card-text">{post.body}</h5>
                        </div>
                     </div>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default PostsPage;

export async function getServerSideProps({ req }) {
   try {
      const response = await fetch("http://localhost:8000/api/posts", {
         method: "GET",
         headers: {
            Authorization: `Bearer ${req.cookies.token}`,
         },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
         return {
            props: {
               posts: data.posts,
               error: null,
            },
         };
      } else {
         return {
            props: {
               posts: null,
               error: data,
            },
         };
      }
   } catch (error) {
      console.log(error);
      return {
         props: {
            posts: null,
            error: "Server Error",
         },
      };
   }
}
