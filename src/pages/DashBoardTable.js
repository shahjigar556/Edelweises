import React from "react";
import { useState } from "react";
import TableData from "../components/TableData";

function DashBoardTable() {
  const data = [1, 2, 3, 4];
  return (
    <div className="table-responsive" style={{fontStyle:'italic'}}>
      <table className="table" >
        <thead className="table-dark">
          <tr>
            <th scope="col" style={{paddingBottom:'20px'}}>Category</th>
            <th scope="col" style={{paddingBottom:'20px'}}>SubCategory</th>
            <th scope="col">Content-Type</th>
            <th scope="col" style={{paddingBottom:'20px'}}>Title</th>
            <th scope="col">Without Co-Brand</th>
            <th scope="col" style={{paddingBottom:'20px'}}>Co-brand</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor:'#c3c4c7'}}>
            {data.map(obj=><TableData key={obj} val={obj}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default DashBoardTable;
