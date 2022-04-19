import React, { useState, useEffect } from 'react';
import {
    useHistory
} from "react-router-dom";

function Head(){
    const history = useHistory();

    const logoutHandle = (e) => {
        e.preventDefault();
        localStorage.clear();
        history.replace('/login');
    }
  
    return(
        <div style={{paddingBottom: "50px"}}>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">            
                <div class="container">
                <a class="navbar-brand text-info" href="/"><b>ATTENDANCE MANAGEMENT</b></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft: "50%"}}>
                    <ul class="navbar-nav ml-auto">
                       
                        <li class="nav-item">
                            <a class="nav-link text-info" href="/register"><b>Register</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-info" href="/"><b>Home</b></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-info" href="" onClick={logoutHandle}><b>logout</b></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        </div>
    );
}
export default Head;