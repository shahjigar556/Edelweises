import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Checkbox from "@material-ui/core/Checkbox";

import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import { useState, useEffect } from "react";
import Alert from "../components/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    // margin: theme.spacing(8, 4),
    marginTop: "15%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "15%",
  },
  input: {
    border: "none",
    backgroundColor: "#EBEDF3",
    borderRadius: "10px",
    marginTop: "2px",
    width: "65%",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  label: {
    marginTop: "30px",
    fontFamily: "poppins",
    fontSize: "20px",
    fontWeight: "600",
  },
  labelPassword: {
    marginTop: "10px",
    fontFamily: "poppins",
    fontSize: "20px",
    fontWeight: "600",
  },
  forgotPassword: {
    color: "#3699FF",
    marginLeft: "50%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "45%",
    },
  },
  btns: {
    display: "flex",
    marginTop: "20px",
  },
  signInButton: {
    backgroundColor: "#187DE4",
    color: "white",
    fontFamily: "poppins",
    fontWeight: "500",
    borderRadius: "5px",
    height: "40px",
    width: "80px",
    border: "none",
  },
  signInButtonGoogle: {
    backgroundColor: "#E1F0FF",
    marginLeft: "10px",
    fontWeight: "500",
    color: "#187DE4",
    fontFamily: "poppins",
    borderRadius: "5px",
    border: "none",
  },
}));

export default function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [count, setCount] = useState(0);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();

  const submitHandler = () => {
    if (email == null || password == null) {
      setOpen(true);
      setCount(count + 1);
      setMessage("Enter All Required fields");
    }
  };

  return (
    <>
      <Alert show={open} message={message} count={count} />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={4} className={classes.image} />
        <Grid item xs={12} sm={8} md={8}>
          <div className={classes.paper}>
            <h2 style={{ fontFamily: "poppins", fontWeight: "600" }}>
              Welcome To Loreum
            </h2>
            <Link to="register" style={{ textDecoration: "none" }}>
              <p
                style={{
                  marginTop: "5px",
                  marginBottom: "0px",
                  fontFamily: "poppins",
                  fontWeight: "600",
                }}
              >
                New Here ?{" "}
                <span style={{ color: "#0075ED" }}>Create An Account</span>
              </p>
            </Link>
            <div style={{ marginRight: "10%" }}>
              <p className={classes.label}>Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={classes.input}
                type="email"
              ></input>
              <p className={classes.forgotPassword}>Forgot Password</p>
              <p className={classes.labelPassword}>Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className={classes.input}
                type="password"
              ></input>
              <div className={classes.btns}>
                <button
                  onClick={submitHandler}
                  className={classes.signInButton}
                >
                  SignIn
                </button>
                <button className={classes.signInButtonGoogle}>
                  <img
                    src="https://img.icons8.com/plasticine/100/000000/google-logo.png"
                    style={{ height: "30px" }}
                    className="img-fluid"
                  />
                  <span>Sign In Using Google</span>
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
