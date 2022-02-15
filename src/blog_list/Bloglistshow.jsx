import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
const Bloglistshow = (props) => {
    return (
        <>
        <Card sx={{boxShadow:6, marginTop: 3,marginLeft:4, marginRight:4 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title} 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to={props.linkedto}>Read it</Button>
                </CardActions>
            </Card>

            {/* <Card>
                <Card.Body>{props.title}</Card.Body>
            </Card> */}
        </>
    )
};

export default Bloglistshow;