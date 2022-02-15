import React ,{useState,useEffect}from "react";
import {Link } from "react-router-dom";
import Fire from "../firebase/Fire"
import Bloglistshow from "./Bloglistshow"
const Bloglist = () =>{
    const [posts, setPosts] = useState([]);
   const collect = "blogdata"
    useEffect(() => {
      const getPostsFromFirebase = [];
      const subscriber = Fire.firestore()
        .collection(collect)
       .onSnapshot((querySnapshot) => {
         querySnapshot.forEach((doc) => {
           getPostsFromFirebase.push({
             ...doc.data(), //spread operator
             key: doc.id, // `id` given to us by Firebase
           });
         });
         setPosts(getPostsFromFirebase);
       });
 
     // return cleanup function
     return () => subscriber();
   }, []); // empty dependencies array => useEffect only called once
 
    const num = posts.map((aa)=>
   //  <li>{aa.name}</li>,
   <p><Bloglistshow title = {aa.title} linkedto={`/blog/${aa.key}`}/></p>

    );
     return (
         <>
         
         {num}
         </>
     )
};

export default Bloglist;