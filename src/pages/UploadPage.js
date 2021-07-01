import React from "react";
import Header from "../components/Header";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import person from "../images/person.png";
import Footer from "../components/Footer";
import { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    padding: '35px 35px 15px 35px',
    fontFamily:"Poppins",
    width: "80%",
    marginTop: "50px",
    borderRadius: "20px",
    boxShadow:'5px 5px 18px rgb(197, 197, 197)',
    backgroundColor: "#fff",
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
    color:'white',
    [theme.breakpoints.down("sm")]: {
      marginBottom:'50px'
   }
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
    width: "90%",
    minWidth: 120,  
    fontFamily:'poppins',
    fontWeight:'900'
  },
  formControl2: {
    marginTop: '20px',
    marginLeft: '6px',
    width: "90%",
    minWidth: 120,
    fontFamily:'poppins',
    fontWeight:'900'
  },
  inputStyle: {
    width: "90%",
    height: '50px',
    outline: "none",
    border: "none",
    marginBottom: "20px",
    marginLeft: '6px',
    marginTop: '10.5px'
  },
  inputDateStyle: {
    outline: "none",
    border: "none",
    marginBottom: "10px",
    marginLeft: '6px',
    marginTop: '10px',     
    width: "90%",
    cursor:'pointer',
    fontStyle:'poppins',
  },
  label: {
    margin: "30px 0px 30px 10px",
    backgroundColor:'#ececec',
    color:"black",
    textAlign: 'center',
    width: '200px', 
    borderRadius:'5px',
    padding:'10px 20px 10px 20px',
    cursor:'pointer'
  },
  line: {
    width: "95%",
  },

  label2: {
    margin: "36px 0px 30px 0px",
    backgroundColor:'#ececec',
    color:"black",
    width: '200px',
    marginLeft: '10px',
    textAlign: 'center',
    borderRadius:'5px',
    padding:'10px 20px 10px 20px',
    cursor:'pointer'
  },  fileUpload: {
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
    <React.Fragment>
          <div className={classes.root}>
          <div style={{ display: "flex" }}>
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>
            Upload Media
          </div>
        </div>
        <hr className={classes.line} />
              <Grid container>
                  <Grid item xs={12} md={6}>
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
                        {/* End of form control one */}
                        <TextField
                                id="standard-multiline-flexible"
                                label="Description"
                                multiline
                                rowsMax={4}
                                onChange={(e) => handleChange(e)}
                                className={classes.inputStyle}
                              />
                        {/* End of form control two */}

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

                        {/* <Grid item xs={12} md={4} style={{marginLeft: '30px'}}> */}
                            <label className={classes.label} for="File">
                            Upload File
                          </label>
                          <input type="file" id="File" style={{display:'none'}}/>
                        {/* </Grid> */}
                        {/* End of form control three */}
                  </Grid>
                  <Grid item xs={12} md={6}>
                        <Grid item xs={12} >
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
                              
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                                id="date"
                                label="Date"
                                type="date"
                                className={classes.inputDateStyle}
                                onChange={(e) => handleChange(e)}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                          </Grid>
                          <Grid item xs ={12}>
                          <FormControl className={classes.formControl2}>
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

                        <label className={classes.label2} for="originalFile">
                            Upload Original File
                          </label>
                          <input type="file" id="originalFile" style={{backgroundColor:'white',display:'none'}}/>
                          </Grid>
                  </Grid>
              </Grid>{/*container 1*/}
              {/* <Grid container style={{marginTop: '30px', marginLeft: '50px'}} >
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4} style={{marginLeft: '30px'}}>
                            <label className={classes.label} for="File">
                            Upload File
                          </label>
                          <input type="file" id="File" style={{display:'none'}}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <label className={classes.label2} for="originalFile">
                            Upload Original File
                          </label>
                          <input type="file" id="originalFile" style={{backgroundColor:'white',display:'none'}}/>
                        </Grid>
                    </Grid>
                </Grid>
              </Grid>  */}
              <div
                style={{
                  display: "flex",
                  marginLeft: '350px',
                  marginTop: '60px',
                  marginBottom: "50px",
                }}
              >
                <Box style={{ marginRight: "30px" }}>
                  <button className="btn" style={{backgroundColor:'white',color:"#1976D2", border: '1px solid black' , width: '120px', padding: '8px'}}>Preview</button>
                </Box>
                <button className="btn" style={{backgroundColor:'#1976D2',color:"white",width: '120px', padding: '8px'}}>Upload</button>
              </div>
          </div>
          <div style={{marginTop:'50px'}}>
              <Footer />
          </div>
    </React.Fragment>    
  );
}

export default UploadPage;
