import React, { useState, useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import { markAttendance } from '../services/attendance';
import {
    useHistory
} from "react-router-dom";
import Header from '../components/Header';
import Class from '../components/Class';

import '../styles/studlist.css';

const View = () => {
    const { id } = useParams();
    // console.log(id);
    const link = useHistory();

    const [cls, setCls] = useState({});
    const [studAttend, setAttend] = useState([]);
    // const [attendees, setAttendees] = useState([]);

   
    console.log('hi')

    useEffect(() => {
        const fac_id = JSON.parse(localStorage.getItem('fac_id'));
        console.log(fac_id);
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'fac_id': fac_id },
        };
        fetch('http://localhost:4000/attend/class/' + id, requestOptions)
            .then(res => res.json())
            .then(detail => {
                console.log(detail);
                setCls({ ...detail });
                setAttend([...detail.studs]);

            }).catch(function (err) {
                console.log(err);
            });;


    }, []);

    

    
  
    return (
        <div class="container mt-5">
        <h2>Total Classes : {" "+cls.periods}</h2>
        <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">Roll_No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Attended</th>
            <th scope="col">Percent</th>
          </tr>
        </thead>
        <tbody>
            {studAttend.map(c=>{
                return   <tr>
                <th scope="row">{c.Roll_no}</th>
                <td>{c.Name}</td>
                <td>{c.Email}</td>
                <td>{c.Attended}</td>
                <td>{c.Percent.toFixed(2)}</td>
              </tr>
            })}
        

        </tbody>
      </table></div>
    );
}
export default View;