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

const Attendance = () => {
    const { id } = useParams();
    // console.log(id);
    const link = useHistory();

    const [detail, setDetail] = useState({});
    const [students, setstudents] = useState([]);
    const [attendees, setAttendees] = useState([]);

    const createAttendees = () => {
        let arr = [];
        for (let i = 0; i < students.length; i++) {
            const { Name, Roll_no, Phone } = students[i];
            let obj = { Name, Roll_no, status: true, Phone };
            console.log(obj);
            arr.push(obj);
        }
        // return arr;
        setAttendees([...arr]);
    }
    console.log('hi')

    // const updateAttendance = (e, at) => {
    //     console.log(e.target.value + " " + at)
    //     var data = [...attendees];
    //     data[(at - 1)].status = e.target.value;
    //     setAttendees(data);
    // }
    const updateAttendance = (id) => {
        console.log(id);
        var data = [...attendees];
        data[id].status = !data[id].status;
        setAttendees(data);
    }

    const onSubmit = async () => {
        console.log(attendees);
        const res = await markAttendance(id, attendees);
        console.log(res);
        if (res) {
            alert("Attendance marked & message sent to absentees");
            link.push('/');
        }else{
            alert("Message not sent");
        }
    }
    const studView = () => {
        console.log("hi");
        link.push('/view/'+id);
    }

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
                setDetail({ ...detail });
                setstudents([...detail.studs]);

            }).catch(function (err) {
                console.log(err);
            });;


    }, []);

    useEffect(() => {
        createAttendees();
    }, [students]);
    return (
        <div>
            <div><Header /></div>
            <div class=".container mt-3">
                <div class="row">
                    <div class="col-sm">
                        <h5>Subject: {detail.sub}</h5>
                    </div>
                    <div class="col-sm">
                        <h5>Department: {detail.dept}</h5>
                    </div>
                    <div class="col-sm">
                        <h5>Year: {detail.year}</h5>
                    </div>
                    <div class="col-sm">
                        <h5>No. of students : {(students.length!=0)?students.length:0}</h5>
                    </div>
                    <div class="col-sm">
                        <button class="btn btn-primary" type="button" onClick={studView}>view</button>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <table>
                    <tr>
                        <th>Student ID</th>
                        {/* <th className="nameCol">Roll_No</th> */}
                        <th className="nameCol">Student Name</th>
                        <th className="switchCol">Attendance</th>
                    </tr>
                </table>
                <Class students={attendees} studentPresent={updateAttendance} />
            </div>
            {/* <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Roll_No</th>
                            <th scope="col">Student</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendees.map((stud, index) => {
                            return <tr>
                                <th scope="row">{++index}</th>
                                <td>{stud.Roll_no}</td>
                                <td>{stud.Name}</td>
                                <td>
                                    <select id="dropdown" onChange={(e) => updateAttendance(e, index)} value={stud.status}>
                                        <option value="none">none</option>
                                        <option value="present">present</option>
                                        <option value="absent">absent</option>
                                    </select></td>

                            </tr>
                        })}

                    </tbody>
                </table>
            </div> */}
            <div className="text-center" style={{marginTop:"30px"}}>
            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>

            </div>
        </div>
    );
}
export default Attendance;