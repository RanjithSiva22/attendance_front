import React,{ useState,useEffect } from 'react';
import {
    useHistory
  } from "react-router-dom";

const ListClass = ({ item,index}) => {
    // console.log(index)
    const link=useHistory();

    const handleClick=(id)=> {
        // console.log("click");
        link.push(`/attendance/${id}`);
    }
    return(
        <>
            <tr onClick={()=>handleClick(item._id)}>
                <td scope="row">{++index}</td>
                <td>{item.sub}</td>
                <td>{item.dept}</td>
                <td>{item.year}</td>
                <td><button type="button" class="btn " onClick={(event)=>{ event.stopPropagation();}}>DELETE</button></td>
            </tr>
        </>
    );
}
export default ListClass;