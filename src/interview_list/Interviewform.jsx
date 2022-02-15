import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Fire from "../firebase/Fire"
import { Paper, Box, Typography, TextField, Grid, FormControlLabel, FormControl, RadioGroup, Radio, Select, FormLabel, MenuItem, Button, InputLabel ,Alert} from "@mui/material";
// import './Interviewie.css';

const defaultuser = {
    name: "",
    branch: "",
    year: "",
    job: "",
    company: "",
    profile: "",
    linkedin: "",
    yt: "",
    round: "",
    coding: "",
    interview1: "",
    interview2: "",
    tips: "",
};
const Interviewform = () => {
    const [user, setUser] = useState(defaultuser);

    const navigate = useNavigate();

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value })
    };
    let res = false;
    const postData = async (e) => {
        e.preventDefault();

        const { name, branch, year, job, company, profile, linkedin, yt, round, coding, interview1, interview2, tips } = user;

        if ((name && branch && year && job && company && profile && linkedin && yt && round && coding && interview1 && interview2 && tips)) {
            let reslink = String(company) + "-" + String(job)
            Fire.firestore().collection(reslink).add({
                name: name,
                branch: branch,
                year: year,
                job: job,
                company: company,
                profile: profile,
                linkedin: linkedin,
                yt: yt,
                round: round,
                coding: coding,
                interview1: interview1,
                interview2: interview2,
                tips: tips,
            });
            res = true;

        }
        if (res) {
            setUser(defaultuser);
            // <Alert severity="success">Thanks for filling Form</Alert>
            alert("Thanks for filling Form");
            navigate('/');
        }
        else {
            // <Alert severity="error">Please fill All required fields</Alert>
            alert('Please fill All required fields');
        }

    };
    return (
        <>
            <Paper component={Box} mx="auto" p={4}>
                <Typography variant="h5" gutterBottom>Add Your experience by filling following details</Typography>

                <form onSubmit={postData}>
                    <Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                name="name"
                                label="Name"
                                type="text"
                                value={user.name}
                                placeholder="Enter Your Name"
                                onChange={getUserData}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                name="branch"
                                label="Branch"
                                type="text"
                                value={user.branch}
                                placeholder="Enter Your Branch"
                                onChange={getUserData}
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid item>
                            <FormControl>
                                <FormLabel>Your Year </FormLabel>
                                <RadioGroup
                                    name="year"
                                    value={user.year}
                                    onChange={getUserData}
                                    row
                                    required
                                >
                                    <FormControlLabel
                                        key="2nd Year"
                                        value="2nd Year"
                                        control={<Radio size="small" />}
                                        label="2nd Year"
                                    />
                                    <FormControlLabel
                                        key="3rd Year"
                                        value="3rd Year"
                                        control={<Radio size="small" />}
                                        label="3rd Year"
                                    />
                                    <FormControlLabel
                                        key="Final Year"
                                        value="Final Year"
                                        control={<Radio size="small" />}
                                        label="Final Year"
                                    />
                                    <FormControlLabel
                                        key="Passout"
                                        value="Passout"
                                        control={<Radio size="small" />}
                                        label="Passout"
                                    />
                                </RadioGroup>
                            </FormControl>

                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormLabel>Your Profile</FormLabel>
                                <RadioGroup
                                    name="job"
                                    value={user.job}
                                    onChange={getUserData}
                                    row
                                    required
                                >
                                    <FormControlLabel
                                        key="intern"
                                        value="intern"
                                        control={<Radio size="small" />}
                                        label="Internship"
                                    />
                                    <FormControlLabel
                                        key="placement"
                                        value="placement"
                                        control={<Radio size="small" />}
                                        label="Placement"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel > Company</InputLabel>
                                <Select
                                    name="company"
                                    value={user.company}
                                    onChange={getUserData}
                                    label="Selct Company"
                                    required
                                >
                                    <MenuItem key="microsoft" value="microsoft">
                                        Microsoft
                                    </MenuItem>
                                    <MenuItem key="amazon" value="amazon">
                                        Amazon
                                    </MenuItem>
                                    <MenuItem key="deshaw " value="deshaw">
                                        De Shaw
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="Profile"
                                type="text"

                                placeholder="Enter Your Job Profile"
                                name="profile"
                                value={user.profile}
                                onChange={getUserData}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="linkedin Profile"
                                type="url"

                                placeholder="Enter Your Linkedein Profile"
                                name="linkedin"
                                value={user.linkedin}
                                onChange={getUserData}
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="Profile Link"
                                type="url"
                                placeholder="Enter Your Youtube or portfolio or resume link"
                                value={user.yt}
                                onChange={getUserData}
                                name="yt"
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="Rounds"
                                type="number"
                                placeholder="No of Rounds"
                                name="round"
                                value={user.round}
                                onChange={getUserData}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="Coding Round"
                                type="text"
                                placeholder="Coding round details"
                                value={user.coding}
                                onChange={getUserData}
                                name="coding"
                                multiline
                                rows={3}
                                maxRows = {10}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="Interview Round 1"
                                type="text"
                                placeholder="Interview round details"
                                value={user.interview1}
                                onChange={getUserData}
                                name="interview1"
                                multiline
                                rows={3}
                                maxRows = {10}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="Interview Round 2"
                                type="text"
                                placeholder="Interview round details"
                                value={user.interview2}
                                onChange={getUserData}
                                name="interview2"
                                multiline
                                rows={3}
                                maxRows = {10}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                label="Suggestion for others"
                                type="text"
                                placeholder="Suggestion"
                                value={user.tips}
                                onChange={getUserData}
                                name="tips"
                                multiline
                                rows={3}
                                maxRows = {10}
                                fullWidth
                                required
                            />
                        </Grid>

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            mt={1}>
                            Submit
                        </Button>
                    </Grid>
                </form>

            </Paper>
            
        </>
    );
};

export default Interviewform;