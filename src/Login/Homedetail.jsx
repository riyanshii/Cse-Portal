import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import Bounce from 'react-reveal/Bounce';
const useStyles = makeStyles((theme) => ({
    home: {
        paddingTop: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(5),
          },
          [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(20),
            paddingRight: theme.spacing(10),
            paddingBottom: theme.spacing(5),
          },
       

    }
}));
const Homedetail = () => {
    const styles = useStyles();
    return (
        <>
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                className={styles.home}>
                <Grid item md={6}>
                    <Bounce left>
                        <Card sx={{ maxWidth: 500, boxShadow: 10 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image="https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362"
                                    alt="green iguana"

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Subject
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Get details of all subject! Syllabus an learning info
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" component={Link} to="/subject">Open it</Button>
                            </CardActions>
                        </Card>

                    </Bounce>
                </Grid>
                <Grid item md={6}>
                    <Bounce right>
                        <Card sx={{ maxWidth: 500, boxShadow: 10 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image="https://i0.wp.com/www.iedunote.com/img/21161/interview.jpg?resize=303%2C182&quality=100&ssl=1"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Interview
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Read Interview Experiences
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" component={Link} to="/interview">Open it</Button>
                            </CardActions>
                        </Card>


                    </Bounce>
                </Grid>
                <Grid item md={6}>

                    <Bounce left>
                        <Card sx={{ maxWidth: 500, boxShadow: 10 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image="https://as1.ftcdn.net/v2/jpg/02/09/98/86/1000_F_209988678_g6utXdmDiYQIkh1X0ukUATmx15ehKTur.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Roadmap
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Don't KNow where to begin with Coding!
                                        Here a Roadmap for you!
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" component={Link} to="/roadmap">Open it</Button>
                            </CardActions>
                        </Card>

                    </Bounce>
                </Grid>
                <Grid item md={6}>
                    <Bounce right>
                        <Card sx={{ maxWidth: 500, boxShadow: 10 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image="https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Blog
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Want to Share Your learning! Go for it
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" component={Link} to="/blog">Open it</Button>
                            </CardActions>
                        </Card>

                    </Bounce>
                </Grid>
            </Grid>

        </>

    )
};

export default Homedetail;