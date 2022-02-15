import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Fire from "../firebase/Fire";
import { Paper, Box, Grid, Typography, Button } from "@mui/material";

const Showexperience = () => {

    const { iid } = useParams();
    const { id } = useParams();
    const { ip } = useParams();
    var collect = id.toString() + "-" + ip.toString();
    const location = useLocation();
    console.log(location);


    // var ss = "/interview/" + id.toString() + "/placement/"+ iid.toString();
    // if(location.pathname === ss)
    // collect = id.toString() +"-placement"; 
    // else  collect = id.toString() +"-intern";

    // const num = Fire.firestore().collection('abc').doc({iid}).get();
    // const num = Fire.firestore().collection('abc').where('__name__', '==' ,{iid}).get();

    const [userDetails, setUserDetails] = useState('')
    Fire.firestore().collection(collect).doc(iid).get()
        .then(snapshot => setUserDetails(snapshot.data()))
    // console.log(num);
    return (
        <>
            <Paper sx={{boxShadow:6, marginTop: 3,marginLeft:4, marginRight:4 }}>
                <Box>
                <Typography variant="h4">{userDetails.profile} Interview Experience - By {userDetails.name}</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={9}>
                    <Typography variant="h6">
                        No of Rounds : {userDetails.round}
                    </Typography>
                    <Typography variant="h6">Coding Round </Typography>
                    <Typography>
                        {userDetails.coding}
                    </Typography>
                    <Typography variant="h6">Interview Round 1 </Typography>
                    <Typography>
                        {userDetails.interview1}
                    </Typography>
                    <Typography variant="h6">Interview Round 2</Typography>
                    <Typography>
                        {userDetails.interview2}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>Name : {userDetails.name}</Typography>
                    <Typography>Branch : {userDetails.branch}</Typography>
                    <Typography>year:  {userDetails.year}</Typography>
                    <Typography>company:  {userDetails.company} - {userDetails.job}</Typography>
                    <Typography> profile:  {userDetails.profile}</Typography>
                    <Button variant="text" href={userDetails.linkedin} target="_blank" >
                        Linkedin
                    </Button>
                    <Button variant="text" href={userDetails.yt} target="_blank" >
                        Youtube or Resume Link
                    </Button>
                </Grid>
                 <Grid item xs={12}>
                    <Typography variant="h5">Tips</Typography>
                    <Typography>{userDetails.tips}</Typography>
                </Grid>
            </Grid>
                </Box>
            </Paper>
            
            {/* <h1>{location.pathname}</h1>
            <h1>{collect}</h1>
            <div style={{ background: "#a7bad9" }}>
                <p>Name : {userDetails.name}</p>
                <p>Branch : {userDetails.branch}</p>
                <p> year:  {userDetails.year}</p>
                <p>job:  {userDetails.job}</p>
                <p>company:  {userDetails.company}</p>
                <p> profile:  {userDetails.profile}</p>
                <p>linkedin: <a href={userDetails.linkedin} target="_blank"> {userDetails.linkedin}</a></p>
                <p>yt: <a href={userDetails.yt} target="_blank"> {userDetails.yt}</a></p>
                <p>round:  {userDetails.round}</p>
                <p>coding:  {userDetails.coding}</p>
                <p>interview1: {userDetails.interview1}</p>
                <p>interview2:  {userDetails.interview2}</p>
                <p>tips: {userDetails.tips}</p>
                <p>id : {iid}</p>
                <h3>{id}</h3>
                <h2>hii in Showexperience kaisaa lgaa</h2> */}
            {/* </div> */}

        </>
    )
};

export default Showexperience;