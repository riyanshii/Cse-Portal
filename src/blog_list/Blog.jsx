import React from "react";
import { Link } from "react-router-dom";
import Bloglist from "./Bloglist";
import { Button } from "@mui/material";
const Blog = () => {
    return (
        <>
         <p></p>
            <Button variant="outlined" component={Link} to="/blog/form">
            Add Your Blog
             </Button>
             <Bloglist/>
            {/* <div style={{ background: "white" }}>
                <Bloglist />
                <h1>Hii, in blog</h1>

                <Link to="/blog/form">Post Blog</Link>
            </div> */}
        </>


    )
};

export default Blog;
