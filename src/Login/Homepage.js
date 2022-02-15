import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Subject from "../sub/Subject";
import Interview from "../interview_list/Interview";
import Interviewform from "../interview_list/Interviewform"
import Interviewlist from "../interview_list/Interviewlist"
import Showexperience from "../interview_list/Showexperience";
import Intern from "../interview_list/Intern";
import Sem from "../sub/Sem";
import Subdata from "../sub/Subdata";
import Roadmap from "../roadmapp/Roadmap";
import Blog from "../blog_list/Blog";
import Homedetail from "./Homedetail";
import Blogform from "../blog_list/Blogform";
import Blogdata from "../blog_list/Blogdata";
import Header from "../navbar/Header";
import { Container,Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const Homepage = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            margin:'0px ' , 
            padding:'0px',
            width:"100vw",
            height:"100vh",
           
        },
    }));
    const contain = useStyles();
    return (
        <Box maxWidth="xl" className="contain.root" sx={ { width:"100vw",
        height:"100vh",backgroundColor: "#fafafa"}}>
          <Header handleLogout={props.handleLogout} />
            <Routes>
                <Route exact path="cse-portal/" element={<Homedetail />} />
                <Route exact path="/subject" element={<Subject />} />
                <Route exact path="/subject/:sem" element={<Sem />} />
                <Route exact path="/subject/:sem/:sub" element={<Subdata />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/blog/form" element={<Blogform />} />
                <Route exact path="/blog/:blogid" element={<Blogdata />} />
                <Route exact path="/roadmap" element={<Roadmap />} />
                <Route exact path="/interview" element={<Interview />} />
                <Route exact path="/interview/ie" element={<Interviewform />} />
                <Route exact path="/interview/:id/placement" element={<Interviewlist/>} />
                <Route exact path="/interview/:id/intern" element={<Intern />} />
                <Route exact path="/interview/:id/:ip/:iid" element={<Showexperience />} />
            </Routes>

        </Box>
    );
};

export default Homepage;