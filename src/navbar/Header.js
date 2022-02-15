import React, { useState } from "react";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  typo: {
    marginRight: "auto",
    color: "white",
    height: 30,
  },
}));

const Header = (props) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <Typography className={styles.typo} variant="h5">Welcome</Typography>
          <Hidden xsDown>

            <Button variant="text"
              className={styles.link}
              color="inherit"
              component={Link} to="/"
            >Home</Button>

            <Button variant="text"
              className={styles.link}
              color="inherit"
              component={Link} to="/subject"
            >Subject</Button>

            <Button variant="text"
              className={styles.link}
              color="inherit"
              component={Link} to="/interview"
            >Interview</Button>

            <Button variant="text"
              className={styles.link}
              color="inherit"
              component={Link} to="/blog"
            >Blog</Button>

            <Button variant="text"
              className={styles.link}
              color="inherit"
              component={Link} to="/roadmap"
            >Roadmap</Button>

            <Button variant="text"
              className={styles.link}
              color="inherit"
              onClick={props.handleLogout}
            >Logout</Button>

          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </ToolBar>
      </Container>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Button variant="text"
              className={styles.link}
              color="inherit"
              component={Link} to="/"
            >Home</Button>

          </ListItem>
          <ListItem>
            <Button variant="text"
              className={styles.link}
              color="inherit"
              component={Link} to="/subject"
            >Subject</Button>
          </ListItem>

          <ListItem>
            <Button variant="text"
              className={styles.link}
              color="inherit"
              component={Link} to="/interview"
            >Interview</Button>

          </ListItem>
          <ListItem>

            <Button variant="text"
              className={styles.link}
              color="inherit"
              component={Link} to="/blog"
            >Blog</Button>

          </ListItem>
          <ListItem>
            <Button variant="text"
              className={styles.link}
              color="inherit"
              component={Link} to="/roadmap"
            >Roadmap</Button>
          </ListItem>
          <ListItem>

            <Button variant="text"
              className={styles.link}
              color="inherit"
              onClick={props.handleLogout}
            >Logout</Button>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;