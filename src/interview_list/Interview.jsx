import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Companycard from "./Companycard";
import { Button, Grid, FormControl, Select, InputLabel, MenuItem } from "@mui/material"
import { makeStyles } from "@material-ui/core/styles";

const Interview = () => {
    const arr = ["microsoft", "amazon", "deshaw", "accenture", "samsung", "oracle", "JP morgan", "Google", "Infosys", "Reliance", "NVDIA", "ZS Assosicates"];

    const navigate = useNavigate();
    const number = arr.map((rr) =>
        <Grid item md={6} sx={{ padding: "2vh" }}>
            {<Companycard name={rr} linkedto={`/interview/${rr}/placement`} />}
        </Grid>
    );

    const [selectcompany, setSelectcompany] = useState("no");
    let value;
    const handleChange = (event) => {
        value = event.target.value;
        setSelectcompany(value);
        navigate(`/interview/${value}/placement`)
    }


    const useStyles = makeStyles((theme) => ({
        inter: {
            width: "100vw",
            height: "100vh",
            paddingTop:theme.spacing(5),
            [theme.breakpoints.down('md')]: {
                paddingLeft: theme.spacing(5),
                paddingRight: theme.spacing(5),
                paddingBottom: theme.spacing(5),
            },
            [theme.breakpoints.up('md')]: {
                paddingLeft: theme.spacing(15),
                paddingRight: theme.spacing(15),
                paddingBottom: theme.spacing(5),
            },


        },
    }));
    const styles = useStyles();
    return (
        <>
            <Grid container spacing={5} className={styles.inter}>
                <Grid item xs={12} md={7}>
                    <FormControl fullWidth>
                        <InputLabel>Company</InputLabel>
                        <Select
                            value={selectcompany}
                            label="Select Company"
                            onChange={handleChange}>

                            {arr.map((arrvalue) => (
                                <MenuItem value={arrvalue}>
                                    {arrvalue}
                                </MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                </Grid>
                <Grid item md={5}> <Button variant="outlined" component={Link} to="/interview/ie">Add You experience </Button></Grid>
                {number}
            </Grid>
        </>


    )
};

export default Interview;