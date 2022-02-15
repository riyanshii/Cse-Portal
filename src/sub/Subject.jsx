import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Button, Card, CardActions,Box } from "@mui/material";
const Subject = () => {
    return (
        <>
            <Typography variant="h4" marginTop={10} marginLeft={69} marginBottom={5}>Choose Your Semester</Typography>
            <Grid container>
                <Grid item md={6}>
                    <Card sx={{ boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="small" component={Link} to="sem1">
                                Semester 1
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="small" component={Link} to="sem2">
                                Semester 2
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="small" component={Link} to="sem3">
                                Semester 3
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="small" component={Link} to="sem4">
                                Semester 4
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="small" component={Link} to="sem5">
                                Semester 5
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="small" component={Link} to="sem6">
                                Semester 6
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="small" component={Link} to="sem7">
                                Semester 7
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={6}>
                    <Card sx={{  boxshadow: 6, marginTop: 3, marginLeft: 10, marginRight: 10}} >
                        <CardActions>
                            <Box margin={'auto'}>
                            <Button size="small" component={Link} to="sem8">
                                Semester 8
                            </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </>
    )
};

export default Subject;