import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import ClassForm from '../components/Modal';
import ListClass from '../components/ListClass';
import Card from '../components/Card';

import * as XLSX from "xlsx";
import { addclassapi } from '../services/addClass';
import Header from '../components/Header';
import {
    useHistory
} from "react-router-dom";

const Home = () => {
    const [items, setItems] = useState([]);

    const [allclass, setallclass] = useState([]);
    const [fclass, setfclass] = useState({ subject: '', dept: '', year: '' })
    const [show, setShow] = useState(false);
    const link = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const markRoute = ()=>{
        console.log("mark");
        link.push('/addmark');
    } 
    const onFormSubmit = async (e) => {
        e.preventDefault();
        // console.log(fclass);

        // setallclass([...allclass, fclass]);
        handleClose();
        // console.log(allclass);
        const res = await addclassapi(fclass, items);
        console.log(res);
        alert("Class Added Successfully");

        setfclass({ subject: '', dept: '', year: '' });
        getClass();

    };

    const inputHandler = (e) => {
        setfclass({ ...fclass, [e.target.name]: e.target.value });
        //   console.log(e.target.value);
    }

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: "buffer" });

                const wsname = wb.SheetNames[0];
                // console.log(wsname)

                const ws = wb.Sheets[wsname];
                //   console.log(ws)
                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            setItems(d);
            console.log(d)

            alert("File upload success");
        });
    };
    
    async function getClass() {
        const fac_id = JSON.parse(localStorage.getItem('fac_id'));
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'fac_id': fac_id },
        };
        await fetch("http://localhost:4000/facl/getclasses",
            requestOptions).then(res => res.json())
            .then(cls => {
                console.log(cls);
                setallclass([...cls]);
            }).catch(function (err) {
                console.log(err);
            });
    }
    useEffect(() => {
        getClass();
    }, [fclass]);

    return (
        <div >
            <div><Header /></div>
            <div className="text-center" style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/proxy/1mN7DvHd9Rguo2CKApwawzGUqKrPLETz5uigZQZZltjABZN5w2kOTGUhsiqM8cWYGC4AweJQxZRLjEmoYDW_n1sagi9WPQXNzoLnXQQntapEpuxwgphNI28pQuKEiyPC6lPIamxINQ")`,
                backgroundRepeat: "no-repeat", objectFit: "contain",
                mozbackgroundsize: "cover", webkitBackgroundSize: "cover", height: "290px", opacity: "1"
            }}>
                <div className="" style={{ paddingTop: "220px" }}>
                    <Button variant="primary" onClick={handleShow}>
                        Add Class
                    </Button>
                    <Button className="" style={{marginLeft:"15px"}} variant="primary" onClick={markRoute}>
                        Add Mark
                    </Button>
                </div>

            </div>
            <div className="m-5" style={{ textAlign: "center"}}>
                {(allclass.length === 0) ?
                    <h3>Add your classes to list</h3> :
                    <>
                        <div className="row">
                            {allclass.map((i, index) => {
                                return <Card item={i} index={index} />
                            })}
                        </div>


                    </>

                }
            </div>


            {/* <div style={{ textAlign: "center", margin: "10% 25%" }}>
                {(allclass.length === 0) ?
                    <h3>Add your classes to list</h3> :
                    <>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Dept</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">DELETE</th>
                                </tr>
                            </thead>

                            {allclass.map((i, index) => {
                                return <ListClass item={i} index={index} />
                            })}

                        </table>
                    </>

                }
            </div> */}


            {/* --------------------------- */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ClassForm onSubmit={onFormSubmit} input={inputHandler} fclass={fclass} sheet={readExcel} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

    );
}



export default Home;

