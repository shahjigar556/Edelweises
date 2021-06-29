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
    backgroundColor: '#fff'
  },
  image: {
    //backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#F5F5F5",
    backgroundPosition: "center",
    // height:'500px'
  },
  paper: {
    // margin: theme.spacing(8, 4),
    marginTop: "12%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "15%",
  },
  input: {
    border: "none",
    paddingLeft:"10px",
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
    width: "60%",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    border:'1px solid #ccc'
  },
  label: {
    marginTop: "20px",
    fontFamily: "poppins",
    fontSize: "18px",
    fontWeight: "normal",
    color: '#1A1934',

  },
  labelPassword: {
    marginTop: "10px",
    fontFamily: "poppins",
    fontSize: "18px",
    color: '#1A1934',
    fontWeight: "normal",
  },
  forgotPassword: {
    color: "#3699FF",
    marginLeft: "44%",
    textDecoration: 'none',
    marginTop: '5px',
    [theme.breakpoints.down("sm")]: {
      marginLeft: "45%",
    },
  },
  btns: {
    display: "flex",
    marginTop: "20px",
  },
  signInButton: {
    backgroundColor: "#1976D2",
    color: "#fff",
    marginTop: '10px',
    fontFamily: "poppins",
    fontWeight: "500",
    borderRadius: "5px",
    height: "40px",
    width: "60%",
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
        <Grid item xs={false} sm={4} md={3} className={classes.image} >

        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <div className={classes.paper}>
            <h2 style={{ fontFamily: "poppins", fontWeight: "600" , color: '#0A0A0A' }}>
              Welcome To Thinkgestalt
            </h2>
            <p style ={{width: '55%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Duis fermentum id in elementum. Mauris adipiscing malesuada 
               volutpat</p>
            <Link to="register" style={{ textDecoration: "none" }}>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontFamily: "poppins",
                  fontWeight: "normal",
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
              <p className={classes.labelPassword}>Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className={classes.input}
                type="password"
              ></input>
              <Link to='/register' style={{ textDecoration: "none" }}><p className={classes.forgotPassword}>Forgot Password</p></Link>
              <div className={classes.btns}>
                <button
                  onClick={submitHandler}
                  className={classes.signInButton}
                >
                  SignIn
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
