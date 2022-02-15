import React from "react";
import { Link } from "react-router-dom";
import { CardContent, Typography, Button, Card, CardActions, } from "@mui/material";
const Semlist = (props) => {
    return (
        <>
           
           <Card sx={{boxShadow:6, marginTop: 3,marginLeft:4, marginRight:4 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name} - details(Add it)
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to={props.linkedto}> Subject:  {props.name}</Button>
                </CardActions>
            </Card>
                
            
        </>
        
    )  
};

export default Semlist;