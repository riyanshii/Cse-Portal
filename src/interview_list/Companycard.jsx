import React from "react"
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
const Companycard = (props) => {
    return (
        <>
            <Card sx={{boxShadow:7}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        All intern and placement experience of {props.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to={props.linkedto}>Read it</Button>
                </CardActions>
            </Card>
        </>
    )
};

export default Companycard;
