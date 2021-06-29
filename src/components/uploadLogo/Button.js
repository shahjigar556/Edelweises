import React from "react";
import './button.css';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';


function Button({text,color,backgroundColor,type}) {
    const handleChange=()=>{
        console.log('Upload button clicked')
    }

  return (
    <React.Fragment>
      <div className="button-wrap">
        <label className="new-button" for="upload" style={{color,backgroundColor}}>
          <span style={{marginRight: '8px'}}>
            {type? <AddIcon/>: <CreateIcon/>}
          </span>
          {" "}
          {text}
        </label>
        <input onClick={handleChange} id="upload" type="file" />
      </div>
    </React.Fragment>
  );
}

export default Button;
