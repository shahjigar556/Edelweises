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
  leftPart: {
    backgroundColor: "#CCCCCC",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom:'5%'
  },
  root: {
    margin: "auto",
    marginLeft:'10%',
    width: "60%",
    overflowY : 'hidden',
    borderRadius: "20px",
    backgroundColor: "#f1f1f1",
  },
  bold: {
    // fontWeight: "bold",
    // fontStyle:'italic'
  },
  line: {
    width: "80%",
    marginTop: '-5px',
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
      {/* <Header /> */}
      <div style={{display:'flex', marginBottom: '70px'}}>
        <div style={{width:"200px",height:"500px",background:'#f5f5f5'}}>
        </div>
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
                      height: "170px",
                      width: "170px",
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
                    <Button backgroundColor="#fff" text="Upload Logo" type={true}/>
                  </center>
                </Grid>
                <Grid item xs={12}>
                  <center>
                    <Button backgroundColor="#fff" text="Update Logo" type={false}/>

                  </center>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              className={classes.imgMargin}
              style={{ marginLeft: "50px" ,marginTop: '50px' }}
              item
              xs={12}
              md={6}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                <div style={{fontWeight: '600'}}>Distributor Name</div>
                  <div className={classes.bold}>{name}</div>
                </Grid>
                <Grid className={classes.margin} item xs={12} md={6}>
                  <div style={{fontWeight: '600'}}>Distributor ARN No</div>
                  <div className={classes.bold}>{ARN}</div>
                </Grid>
                <div style={{ marginTop: "40px", fontSize: "30px"}}>
                  Contact Person
                </div>
                <hr className={classes.line} />
              </Grid>
              <Grid container>
                <Grid className={classes.margin} item xs={12} md={6}>
                <div style={{fontWeight: '600'}}>Name of the Person</div>
                  <div className={classes.bold}>{personName}</div>
                </Grid>
                <Grid className={classes.margin} item xs={12} md={6}>
                <div style={{fontWeight: '600'}}>Email ID</div>
                  <div className={classes.bold}>{email}</div>
                </Grid>
                <Grid item xs={12} md={6} style={{ marginTop: "25px" }}>
                <div style={{fontWeight: '600'}}>Mobile Number</div>
                  <div className={classes.bold}>{mobile}</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>{/*root*/}
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
