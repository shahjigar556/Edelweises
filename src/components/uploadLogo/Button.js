import React from "react";
import './button.css';
function Button({text}) {
    const handleChange=()=>{
        console.log('Upload button clicked')
    }
  return (
    <React.Fragment>
      <div className="button-wrap">
        <label className="new-button" for="upload">
          {" "}
          {text}
          <span style={{ marginLeft: "10px" }}>
            <i className="fas fa-plus"></i>
          </span>
        </label>
        <input onClick={handleChange} id="upload" type="file" />
      </div>
    </React.Fragment>
  );
}

export default Button;
