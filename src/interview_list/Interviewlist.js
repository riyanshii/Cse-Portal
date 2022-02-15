import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Fire from "../firebase/Fire"
import Experiencelist from "./Experiencelist";
import { Box,Button } from "@mui/material";

const Interviewlist = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  //  const {ip} = useParams();
  //   const collect = id.toString() +"-" +ip.toString();
  const collect = id.toString() + "-placement"
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

    return () => subscriber();
  }, []);

  const num = posts.map((aa) =>
    //  <li>{aa.name}</li>,
    <p><Experiencelist name={aa.name}
      linkedto={`/interview/${id}/placement/${aa.key}`} /></p>
  );
  return (
    <>
      <Box sx={{paddingTop:"5vh", paddingLeft:"10vh"}}>
      <Button variant="text" component={Link} to={`/interview/${id}/intern`}>Intern</Button>
      <Button variant="text" component={Link} to={`/interview/${id}/placement`}>Placement</Button>
      </Box>
      {num}
      
    </>
  )
};

export default Interviewlist;