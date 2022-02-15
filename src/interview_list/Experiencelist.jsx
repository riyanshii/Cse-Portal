import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardActions, CardContent, CardActionArea, Button, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
const Experiencelist = (props) => {

    const useStyles = makeStyles((theme) => ({
        exper: {
          marginTop:theme.spacing(3),
          marginLeft:theme.spacing(10),
           marginRight:theme.spacing(10),
            marginBottom:theme.spacing(3),

            
        },
    }));

    const styles = useStyles();
    return (
        <>
            <Card className={styles.exper} sx={{ boxShadow: 6}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name} experience
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" component={Link} to={props.linkedto}>Read it</Button>
                </CardActions>
            </Card>

        </>
    )
};

export default Experiencelist;