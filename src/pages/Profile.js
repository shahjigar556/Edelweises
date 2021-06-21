import React from "react";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import laptop from "../images/laptop.jpg";

import Button from "../components/uploadLogo/Button";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  // topContainer: {
  //   [theme.breakpoints.down("sm")]: {
  //     height: "1200px",
  //   },
  // },
  leftPart: {
    backgroundColor: "#212529",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  root: {
    margin: "auto",
    width: "80%",
    marginTop: "50px",
    borderRadius: "20px",
    backgroundColor: "#f1f1f1",
  },
  bold: {
    fontWeight: "bold",
  },
  line: {
    width: "80%",
  },
  imgStyle: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
  },
  margin: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  imgMargin: {
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    },
  },
  display: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    width: "80%",
  },
}));
function Profile() {
  const classes = useStyles();
  const [name, setName] = useState("ADMIN");
  const [ARN, SetARN] = useState("ADMIN");
  const [personName, setPersonName] = useState("Jigar");
  const [email, setEmail] = useState("abc@gmail.com");
  const [mobile, setMobile] = useState(123456789);
  return (
    <div >
      <Header />
      <div style={{marginBottom:'100px'}}>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} md={4} className={classes.leftPart}>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  style={{
                    margin: "auto",
                    width: "50%",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={laptop}
                    style={{
                      borderRadius: "50%",
                      height: "150px",
                      width: "150px",
                    }}
                    className="img-fluid"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ marginTop: "20px" }}
                >
                  <center>
                    {/* <input type="file" /> */}
                    <Button text="Upload Logo"/>
                  </center>
                </Grid>
                <Grid item xs={12}>
                  <center>
                    <button
                      className="btn btn-primary text-center"
                      style={{backgroundColor:'#68de76',color:"black",margin: "20px"}}
                    >
                      Upload/Update
                    </button>
                  </center>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              className={classes.imgMargin}
              style={{ marginLeft: "50px" }}
              item
              xs={12}
              md={6}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                  Distributor Name
                  <div className={classes.bold}>{name}</div>
                </Grid>
                <Grid className={classes.margin} item xs={12} md={6}>
                  Distributor ARN No
                  <div className={classes.bold}>{ARN}</div>
                </Grid>
                <div style={{ marginTop: "20px", fontSize: "20px" }}>
                  Contact Person
                </div>
                <hr className={classes.line} />
              </Grid>
              <Grid container>
                <Grid className={classes.margin} item xs={12} md={6}>
                  Name of the Person
                  <div className={classes.bold}>{personName}</div>
                </Grid>
                <Grid className={classes.margin} item xs={12} md={6}>
                  Email Id
                  <div className={classes.bold}>{email}</div>
                </Grid>
                <Grid item xs={12} md={6} style={{ marginTop: "10px" }}>
                  Mobile No
                  <div className={classes.bold}>{mobile}</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
