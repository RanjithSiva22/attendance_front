import React, { useState, useEffect } from 'react';
import {
    useHistory
} from "react-router-dom";

const Card = ({ item, index }) => {
    // console.log(index)
    const link = useHistory();

    const handleClick = (id) => {
        // console.log("click");
        link.push(`/attendance/${id}`);
    }
    return (
        <>
            <div class="card m-5" style={{ width: "18rem",cursor: "pointer",boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",backgroundColor:"#fefbd8" }} onClick={()=>handleClick(item._id)}>
                <div class="card-body">
                <h6 class="card-subtitle mb-2 text-primary">{++index}</h6>

                    <h5 class="card-title text-success">{item.sub}</h5>

                    <h6 class="card-subtitle mb-2 text-muted">{item.dept}</h6>
                    <p class="card-text">{item.year}</p>
            
                </div>
            </div>
        </>
    );
}
export default Card;