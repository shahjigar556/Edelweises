import React from "react";
import Header from "../components/Header";
import filter from "../images/filter.png";
import TableData from "../components/TableData";
import {
  makeStyles,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import Footer from "../components/Footer";
import DashBoardTable from "./DashBoardTable";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "80%",
    marginTop: "50px",
    borderRadius: "20px",
    backgroundColor: "#f1f1f1",
    padding: "3% 5% 5% 5%",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  line: {
    width: "100%",
  },
  tableHeader: {
    backgroundColor: "#e0e3e9",
    padding: "20px  10px 10px",
  },
  padding: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "5%",
    },
  },
  option: {
    fontFamily: "poppins",
    fontStyle: "italic",
    fontWeight: "600",
  },
}));
function DashBoard() {
  const classes = useStyles();
  return (
    <div>
      <Header />

      <div className={classes.root}>
        <div style={{ display: "flex" }}>
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>
            Marketing Collaterals
          </div>
          <div style={{ marginLeft: "60%" }}>
            <img
              src={filter}
              className="img-fluid"
              style={{ height: "20px", width: "20px" }}
            />
          </div>
        </div>
        <hr className={classes.line} />
        <Grid container>
          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                <div className={classes.option}>Category</div>
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
          </Grid>
          <Grid item xs={12} md={6} className={classes.padding}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                <div className={classes.option}>SubCategory</div>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                <div className={classes.option}>SubCategory</div>
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
          </Grid>
        </Grid>
        <hr className={classes.line} style={{ marginBottom: "10px" }} />
        <DashBoardTable />
      </div>
      <Footer />
    </div>
  );
}

export default DashBoard;
