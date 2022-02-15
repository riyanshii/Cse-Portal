import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Fire from "../firebase/Fire"
// import './Interviewie.css';
import { Paper, Box, Typography, TextField, Grid, FormControlLabel, FormControl, RadioGroup, Radio, Select, FormLabel, MenuItem, Button, InputLabel, Alert } from "@mui/material";
const Blogform = () => {
    const [bloguser, setblogUser] = useState({
        title: "",
        blogtext: "",
        name: "",
        linkedin: "",
    }
    );
    const navigate = useNavigate();
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setblogUser({ ...bloguser, [name]: value })
    };
    let res = false;
    const postData = async (e) => {
        e.preventDefault();

        const { title, blogtext, name, linkedin } = bloguser;
        if ((title && blogtext && name && linkedin)) {
            let reslink = "blogdata"
            Fire.firestore().collection(reslink).add({
                title: title,
                blogtext: blogtext,
                name: name,
                linkedin: linkedin,

            });
            res = true;

        }
        if (res) {
            setblogUser({
                title: "",
                blogtext: "",
                name: "",
                linkedin: "",

            })
            alert("Thanks for filling Form");
            navigate('/blog');
        }
        else {
            alert('pls fill complete form');
        }

    };
    return (
        <>
            <Paper component={Box} mx="auto" p={4}>
                <Typography variant="h5" gutterBottom>Add Your Blog by filling following details</Typography>

                <form onSubmit={postData}>
                    <Grid container spacing={5}>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                name="name"
                                label="Name"
                                type="text"
                                value={bloguser.name}
                                placeholder="Enter Your Name"
                                onChange={getUserData}
                                required
                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                variant="outlined"
                                name="linkedin"
                                label="Linkedin Profile"
                                type="url"
                                value={bloguser.linkedin}
                                placeholder="Enter Your Linkedin Profile"
                                onChange={getUserData}
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid marginTop={5}>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                name="title"
                                label="Blog's Title"
                                type="text"
                                value={bloguser.title}
                                placeholder="Enter Your Title"
                                onChange={getUserData}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item marginTop={4}>
                            <TextField
                                variant="outlined"
                                name="blogtext"
                                label="Blog's Details"
                                type="text"
                                value={bloguser.blogtext}
                                placeholder="Enter Your Blog"
                                onChange={getUserData}
                                required
                                multiline
                                rows={6}
                                maxRows={20}
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        marginTop={3}>
                        Submit
                    </Button>
                </form>
            </Paper>

        </>
    )
};

export default Blogform;
