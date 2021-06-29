import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Header from "../components/Header";
import Checkbox from "@material-ui/core/Checkbox";
import logo from "../images/laptop.jpg";
import Button from "../components/uploadLogo/Button";
import { useState } from "react";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "80%",
    marginTop: "50px",
    borderRadius: "20px",
    backgroundColor: "#f1f1f1",
    marginBottom: "70px",
  },
  rightPart: {
    backgroundColor: "#212529",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  leftPart: {
    paddingLeft: "20px",
    paddingTop: "20px",
    paddingRight: "20px",
  },
  heading: {
    fontWeight: "bold",
    fontSize:'30px',
    fontStyle:'italic'
  },
  imgAlign: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  margin:{
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    }
  },
  input: {
    border: "none",
    backgroundColor: "white",
    borderBottom: "1px solid black",
    [theme.breakpoints.down("sm")]: {
      width:'100%'
    }
    
  },
  additionalInput: {
    border: "none",
    backgroundColor: "white",
    borderBottom: "2px solid #818A91",
    marginTop: "10px",
    width: "100%",
    padding: "10px",
  },
  downloadBtn: {
    marginTop: "40px",
    backgroundColor:'white',
    color:"black",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
    borderRadius:'5px'
  },
  preview: {
    height: "70%",
    backgroundColor: "white",
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
  },
}));
function CoBranding() {
  const classes = useStyles();
  const [name, setName] = useState("Jigar");
  const [email, setEmail] = useState("abc@gmail.com");
  const [phone, setPhone] = useState(123456);

  const handleLogoUpdate = () => {
    console.log("update button clicked");
  };
  return (
    <div>
      {/* <Header /> */}
      <div className={classes.root}>
        <Grid container>
          <Grid item md={6} xs={12} className={classes.leftPart}>
            <div className={classes.heading}>Co Branding</div>

            <Grid container>
              <Grid item sm={6} xs={12}>
                <div style={{ marginTop: "20px" }}>
                  <Checkbox
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <span style={{fontStyle:'italic'}}>Logo</span>
                </div>

                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <span style={{fontStyle:'italic'}}>Text</span>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div className={classes.imgAlign}>
                  <img
                    style={{
                      borderRadius: "50%",
                      height: "100px",
                      width: "100px",
                    }}
                    src={logo}
                    className="img-fluid"
                  />
                  <div style={{ marginTop: "10px", marginBottom: "20px" }}>
                    <Button text="Upload New"  color="white" backgroundColor="black"/>
                    <button
                      onClick={handleLogoUpdate}
                      style={{ marginTop: "10px",backgroundColor:'black',color:"white",fontStyle:'italic' }}
                      className="btn"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: "20px" }}>
              <Grid item xs={12} md={6} className={classes.margin}>
                <label for="name">Distributor Name</label>
                <input className={classes.input} type="text" id="name" />
              </Grid>
              <Grid item xs={12} md={6} className={classes.margin}>
                <label for="ARN">Distributor ARN</label>
                <input className={classes.input} type="text" id="ARN" />
              </Grid>
            </Grid>
            <div style={{ marginTop: "20px", fontWeight: "bold" ,fontSize:'30px',fontStyle:'italic'}}>
              Additional Details
            </div>
            <div style={{ marginTop: "30px" }}>
              <div style={{ marginTop: "20px" }}>
                <label for="name">Name</label>
                <br />
                <input
                  className={classes.additionalInput}
                  type="text"
                  id="name"
                />
                {/* <p className={classes.additionalInput}>{name}</p> */}
              </div>
              <div style={{ marginTop: "20px" }}>
                <label for="email">Email</label>
                <br />
                <input
                  className={classes.additionalInput}
                  type="text"
                  id="email"
                />
                {/* <p className={classes.additionalInput}>{email}</p> */}
              </div>
              <div style={{ marginTop: "20px" }}>
                <label for="phone">Phone</label>
                <br />
                <input
                  className={classes.additionalInput}
                  type="text"
                  id="phone"
                />
                {/* <p className={classes.additionalInput}>{phone}</p> */}
              </div>
            </div>
            <center>
              <button
                className="btn"
                style={{backgroundColor:'black',color:"white",marginTop: "30px", marginBottom: "40px"}}
              >
                Submit
              </button>
            </center>
          </Grid>
          <Grid item xs={12} md={6} className={classes.rightPart}>
            <div className={classes.heading} style={{ marginTop: "10px" ,color:'white'}}>
              Preview
            </div>
            <div style={{ color: "white", marginBottom: "15px" }}>
              In case of no preview please download and view
            </div>
            <div className={classes.preview}>
              {/* Empty container for preview */}
            </div>
            <button type="button" className={`${classes.downloadBtn} btn`}>
              Download
            </button>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default CoBranding;
