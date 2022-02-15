import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Fire from "../firebase/Fire";
import Semlist from "./Semlist";
import {Grid, Typography } from '@mui/material';

const Sem = () => {
    const { sem } = useParams();
    const semm = "sub" + sem.toString();
    // Fire.firestore().collection(semm).add({
    //     semsub:"Pdta",
    //     subnotes:"http://localhost:3000/subject/Sem1",
    //     subsyllabus:"http://localhost:3000/subject/Sem1",
    //     subbooks:"http://localhost:3000/subject/Sem1",
    //     subreference:"http://localhost:3000/subject/Sem1",
    //     subques:"http://localhost:3000/subject/Sem1",

    // });
    const [posts, setPosts] = useState([]);
    const collect = semm.toString();
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

    const semester = posts.map((aa) =>
        <p><Semlist name={aa.semsub} linkedto={`/subject/${sem}/${aa.key}`} /></p>
    );
    return (
        <>

            <Typography variant="h4" marginTop={5} marginLeft={40}>Semester - {sem} Subjects</Typography>
            {semester}
            
        </>
    )
};
export default Sem;