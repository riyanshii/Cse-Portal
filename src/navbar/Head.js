import React, { useState } from "react";
import Link from "@material-ui/core/Link";
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

export default function Head(props) {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" backgroundColor="#212529">
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <Typography className={styles.typo} variant="h5">Welcome</Typography>
          <Hidden xsDown>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              href="cse-portal/"
            >
              Home
            </Link>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              href="/subject"

            >
              Subject
            </Link>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              href="/interview"
            >
              Interview
            </Link>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              href="/blog"
            >
              Blogs
            </Link>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              href="/roadmap"
            >
              Roadmap
            </Link>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              onClick={props.handleLogout}
            >
              Logout
            </Link>
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
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              href="cse-portal/"
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              href="/subject"

            >
              Subject
            </Link>
          </ListItem>

          <ListItem>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              href="/interview"
            >
              Interview
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              href="/blog"
            >
              Blogs
            </Link>

          </ListItem>
          <ListItem>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              href="/roadmap"
            >
              Roadmap
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className={styles.link}
              color="textPrimary"
              variant="button"
              underline="hover"
              onClick={props.handleLogout}
            >
              Logout
            </Link>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}