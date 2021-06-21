import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

// ALert
import Alert from '../components/Alert'

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
    marginLeft: "20%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    border: "none",
    backgroundColor: "#EBEDF3",
    borderRadius: "10px",
    marginTop: "15px",
    width: "65%",
    height: "60px",
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
  submit: {
    backgroundColor: "#187DE4",
    color: "white",
    fontFamily: "poppins",
    fontWeight: "500",
    borderRadius: "5px",
    height: "40px",
    width: "80px",
    border: "none",
  },
  cancel: {
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
  const [open, setOpen] = React.useState(false);

  const [count,setCount]=useState(0);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [message,setMessage]=useState();

  const submitHandler = () => {

    if(email==null || name==null || password==null || confirmPassword==null)
    {
        setCount(count+1);

        console.log(`${count}`);
        setOpen(true)
        setMessage(`Please Enter all the Fields`)
    }
    if (password != confirmPassword) {
      setCount(count+1);
      setOpen(true)
      setMessage(`Password and Confirm Password does not match`)
    }
  };

  return (
    <>
    <Alert show={open} message={message} count={count}/>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={4} className={classes.image} />
        <Grid item xs={12} sm={8} md={8}>
          <div className={classes.paper}>
            <h2 style={{ fontFamily: "poppins", fontWeight: "600" }}>
              Sign Up
            </h2>
            <div style={{ marginRight: "10%" }}>
              <input
                className={classes.input}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
              ></input>
              <input
                className={classes.input}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
              ></input>
              <input
                className={classes.input}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              ></input>
              <input
                className={classes.input}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="confirmPassword"
              ></input>

              <div className={classes.btns}>
                <button onClick={submitHandler} className={classes.submit}>
                  Submit
                </button>
                <button className={classes.cancel}>Cancel</button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
