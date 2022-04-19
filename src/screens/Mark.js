import React, { Component } from 'react';
// import {registerapi} from '../services/register';
import Header from '../components/Header';
import * as XLSX from "xlsx";
import {addmarkapi} from "../services/mark";
class Mark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dept: '',
            year: '',
            stclass: '',
            sem:'',
            test: '',
            stmarks: [],
        };
    }

    inputHandler = (e) => {
        // console.log(e.target.name);
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        console.log('working');
        console.log(this.state);

        let res=await addmarkapi(this.state);
        console.log(res);
        if(res) return this.props.history.push('/');
    }

    readExcel = (file) => {
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
            this.setState({ ...this.state, stmarks: d });
            console.log(d)

            alert("File upload success");
        });
    };


    render() {
        return (
            <div >
                <Header />
                <div style={{ padding: "100px 100px", backgroundColor: "LightGray" }}>
                    <div class=".container" style={{padding:"0 160px"}}>

                        <h2 style={{color:"red"}}>Upload marks</h2>

                        <div style={{ backgroundColor: "black", color: "blue", padding: "20px 150px" }}>
                            <form onSubmit={this.submitHandler} autoComplete="on">

                                <div className="form-group">
                                    <label for="exampleInputName">Department</label>
                                    <input type="text" className="form-control" id="exampleInputDept" placeholder="Dept" name="dept" value={this.state.dept} onChange={this.inputHandler} />
                                </div><br></br>
                                <div className="form-group">
                                    <label for="exampleInputName">Year</label>
                                    <input type="text" className="form-control" id="exampleInputPhone" placeholder="Year" name="year" value={this.state.year} onChange={this.inputHandler} />
                                </div><br></br>
                                <div className="form-group">
                                    <label for="exampleInputName">Class</label>
                                    <input type="text" className="form-control" id="exampleInputPhone" placeholder="class" name="stclass" value={this.state.class} onChange={this.inputHandler} />
                                </div><br></br>
                                <div className="form-group">
                                    <label for="exampleInputName">Sem</label>
                                    <input type="text" className="form-control" id="exampleInputPhone" placeholder="semester" name="sem" value={this.state.sem} onChange={this.inputHandler} />
                                </div><br></br>
                                <div className="form-group">
                                    <label for="exampleInputName">Test</label>
                                    <input type="text" className="form-control" id="exampleInputPhone" placeholder="test" name="test" value={this.state.test} onChange={this.inputHandler} />
                                </div><br></br>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Marks</label>
                                    <input type="file" className="form-control" id="exampleInputPassword1" name="stmarks" onChange={(e) => {
                                        const file = e.target.files[0];
                                        this.readExcel(file);
                                    }} />
                                </div>
                                <br></br>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>


                </div>

            </div>

        );
    }
}
export default Mark;


// export default withRouter(Register);








