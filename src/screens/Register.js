import React, { Component } from 'react';
import {registerapi} from '../services/register';
import Header from '../components/Header';
import logo from '../assets/logo.png';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            dept:'',
            phone:'',
            password: ''
        };
    }
   
    inputHandler = (e) => {
        // console.log(e.target.name);
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    submitHandler = async(e) => {
        e.preventDefault();
        console.log('working');
        console.log(this.state);
      
        let res=await registerapi(this.state);
        console.log(res);
        if(res) return this.props.history.push('/login');
    }


    render() {
        return (
            <div >
            <Header/>
            <div style={{padding:"100px 100px",backgroundColor:"LightGray"}}>
                <div class="container">
                <div class="row">
                    <div class="col-sm">
                    {/* <div>
                     <h1 style={{color:"red",margin:"0 20%",paddingBottom:"2%"}}>Faculty Register</h1>
                    </div> */}
                   <img src={logo} width="90%" height="80%" alt="sri shakthi" class="img-fluid"></img>

                    </div>
                    <div class="col-sm">
                     <h2>REGISTER</h2>

                    <div style={{backgroundColor:"#fefbd8",padding:"20px 20px"}}>
                    <form onSubmit={this.submitHandler} autoComplete="on">
                    <div className="form-group">
                        <label for="exampleInputName">Faculty Name</label>
                        <input type="text" className="form-control" id="exampleInputName" placeholder="name" name="name" value={this.state.name} onChange={this.inputHandler} />
                    </div><br></br>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" value={this.state.email} onChange={this.inputHandler} />
                    </div><br></br>
                    <div className="form-group">
                        <label for="exampleInputName">Department</label>
                        <input type="text" className="form-control" id="exampleInputDept" placeholder="Dept" name="dept" value={this.state.dept} onChange={this.inputHandler} />
                    </div><br></br>
                    <div className="form-group">
                        <label for="exampleInputName">Phone</label>
                        <input type="text" className="form-control" id="exampleInputPhone" placeholder="phone" name="phone" value={this.state.phone} onChange={this.inputHandler} />
                    </div><br></br>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={this.state.password} onChange={this.inputHandler} />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    </div>
                    </div>

                </div>
                </div>
            </div>

            </div>

        );
    }
}
export default Register;


// export default withRouter(Register);








