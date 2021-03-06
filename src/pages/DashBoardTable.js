import React from "react";
import { useState } from "react";
import TableData from "../components/TableData";

function DashBoardTable() {
  const data = [1, 2, 3, 4,5,6];
  return (
    <div className="table-responsive" >
      <table className="table" >
        <thead className="table-light">
          <tr>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>Category</th>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>SubCategory</th>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>Content-Type</th>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>Title</th>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>Without</th>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>Co-brand</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor:'white'}}>
            {data.map(obj=><TableData key={obj} val={obj}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default DashBoardTable;
