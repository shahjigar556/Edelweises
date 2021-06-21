import React from "react";
import Grid from "@material-ui/core/Grid";
import Down from "../images/down-arrow.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  line: {
    width: "100%",
  },
  p:{
    [theme.breakpoints.down("sm")]: {
      display:"block"
    }
  }
}));

function TableData({ val }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <tr>
        <th scope="row">Other Funds</th>
        <td>Edelweisses US value offshore Equity fund</td>
        <td>Presentation</td>
        <td>MF store test</td>
        <td>
        <img src={Down} alt="Download-image" style={{ height: "15px", width: "auto", display: "inline-block" }}/>
        <p style={{ display: "inline-block", marginLeft: "15px" }} className={classes.p}>DOWNLOAD</p>
        </td>
        <td>
        <i class="far fa-eye" style={{ display: "inline-block" ,marginLeft:'10px' }}></i>{" "}
        <i class="fas fa-palette" style={{ display: "inline-block" ,marginLeft:'10px'}}></i>{" "}
        <i class="far fa-trash-alt" style={{ display: "inline-block" ,marginLeft:'10px'}}></i>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default TableData;
