import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Fire from "../firebase/Fire"
import { Paper, Box, Grid, Typography, Button } from "@mui/material";
const Blogdata = () =>{
    const {blogid} = useParams();

    const [userDetails, setUserDetails] = useState('')
    Fire.firestore().collection("blogdata").doc(blogid).get()
        .then(snapshot => setUserDetails(snapshot.data()));

        return(
            <>
                
            <Paper sx={{boxShadow:6, marginTop: 3,marginLeft:4, marginRight:4 }}>
                <Box>
                <Typography variant="h4">{userDetails.title}  - By {userDetails.name}</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={9}>
                    <Typography variant="h6">
                    {userDetails.blogtext}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>Name : {userDetails.name}</Typography>
                    <Button variant="text" href={userDetails.linkedin}target="_blank" >
                       Profile
                    </Button>

                </Grid>
            </Grid>
                </Box>
            </Paper>
                
            </>
        )
};

export default Blogdata;