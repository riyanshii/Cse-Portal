import React, { useState } from "react";
import Fire from "../firebase/Fire";
import { useParams } from "react-router";
import { Typography } from '@mui/material';
const Subdata = () => {
    const { sem } = useParams();
    const { sub } = useParams();
    const semm = "sub" + sem.toString();
    const [userDetails, setUserDetails] = useState('')
    Fire.firestore().collection(semm).doc(sub).get()
        .then(snapshot => setUserDetails(snapshot.data()))
        
    return (
        <div style={{ background: "#a7bad9" }}>

            <p>Sem sub : {userDetails.semsub}</p>

            <p>Sem sub notes : <a href={userDetails.subnotes} target="_blank"> {userDetails.subnotes}</a> </p>

            <p>Sem sub syllabus : <a href={userDetails.subsyllabus} target="_blank"> {userDetails.subsyllabus}</a></p>

            <p>Sem sub books :
                <a href={userDetails.subbooks} target="_blank"> {userDetails.subbooks}</a> </p>

            <p>Sem sub reference :
                <a href={userDetails.subreference} target="_blank"> {userDetails.subreference}</a></p>

            <p>Sub previous year ques ppr :
                <a href={userDetails.subques} target="_blank"> {userDetails.subques}</a> </p>

            <p>In subdata</p>
        </div>
    )
};

export default Subdata;