import React from "react";
import Header from "../components/Header";
import { Container, Col, Row } from "react-bootstrap";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import upload from "../images/upload.jpg";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import person from "../images/person.png";
import Footer from "../components/Footer";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  topContainer:{
    [theme.breakpoints.down("sm")]: {
      height: "1200px",
    }
  },
  root: {
    margin: "auto",
    width: "80%",
    marginTop: "50px",
    borderRadius: "20px",
    backgroundColor: "#f1f1f1",
  },
  image: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
       marginTop:"20px",
       height:'150px',
       width:"150px"
    }
  },
  heading: {
    fontWeight: "bold",
    fontSize: "20px",
    marginTop: "20px",
    color:'white'
  },
  leftPart: {
    backgroundColor: "#212529",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width:'100%'
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
    minWidth: 120,
  },
  inputStyle: {
    width: "100%",
    outline: "none",
    border: "none",
    borderBottom: "1px solid gray",
    marginBottom: "10px",
    marginTop: "20px",
  },
  inputDateStyle: {
    outline: "none",
    border: "none",
    borderBottom: "1px solid gray",
    marginBottom: "10px",
    marginTop: "20px",
    width: "100%",
    cursor:'pointer'
  },
  label: {
    marginBottom: "10px",
    backgroundColor:'#68de76',
    borderRadius:'5px',
    padding:'5px',
    cursor:'pointer'
  },
  fileUpload: {
    opacity: "0",
    position: "absolute",
    zIndex: "-1",
  },
}));
function UploadPage() {
  const classes = useStyles();

  // working with dates
  const handleChange = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  const d = new Date();
  const year = d.getFullYear();
  let month = d.getMonth();
  const day = d.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  const initialDate = `${year}-${month}-${day}`;
  const [date, setDate] = useState(initialDate);

  return (
    <div >
      <Header />
      <div className={classes.root}>
        <Grid container style={{ marginBottom: "50px" }}>
          <Grid
            item
            xs={12}
            md={4}
            className={classes.leftPart}
          >
            <img src={person} alt="person" className={classes.image} />
            <div className={classes.heading}>Let's Get You set up</div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div style={{ margin: "auto", width: "70%" }}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Selected Fund Type</FormHelperText>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                  Sub-Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Selected Fund Name</FormHelperText>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                  Marketing Content Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Selected Content Type</FormHelperText>
              </FormControl>
              <Grid container spacing={1}>
                <Grid item xs={12} md={8}>
                  <input
                    type="text"
                    className={classes.inputStyle}
                    placeholder="Description"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <input
                    type="date"
                    className={classes.inputDateStyle}
                    value={date}
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} style={{ marginTop: "10px" }}>
                <Grid item xs={12} md={6}>
                  <label className={classes.label} for="File">
                    Upload File
                  </label>
                  <input type="file" id="File" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <label className={classes.label} for="originalFile">
                    Upload Original File
                  </label>
                  <input type="file" id="originalFile" style={{backgroundColor:'white'}}/>
                </Grid>
              </Grid>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                  File Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Selected Content Type</FormHelperText>
              </FormControl>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "50px",
                }}
              >
                <Box boxShadow={3} style={{ marginRight: "30px" }}>
                  <button className="btn btn-primary" style={{backgroundColor:'#68de76',color:"black"}}>Preview</button>
                </Box>
                <button className="btn btn-primary" style={{backgroundColor:'#68de76',color:"black"}}>Upload</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default UploadPage;
