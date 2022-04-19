import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {loginapi} from '../services/login';
import Header from '../components/Header';
import logo from '../assets/logo.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

    }
    inputHandler = (e) => {
        // console.log(e.target.name);
        this.setState({ ...this.state, [e.target.name]: e.target.value })

    }

    submitHandler = async(e) => {
        // const { email, password } = this.state;
        e.preventDefault();
        // console.log('login');
        let res= await loginapi(this.state);
        console.log(res);
        if(res) return this.props.history.push('/');

        // console.log(this.state);
    
    }

    render() {
        return (
            <div><Header/>

            <div style={{padding:"100px 100px",backgroundColor:"LightGray"}}>
                <div class="container">
                <div class="row">
                    <div class="col-sm ">
                    {/* <div>
                     <h1 style={{color:"red",margin:"0 20%",paddingBottom:"2%"}}>Faculty Login</h1>
                    </div> */}
                   <img src={logo} width="90%" height="80%" alt="srishakthi"></img>

                    </div>
                    <div class="col-sm text-center">
                     <h2>LOGIN</h2>

                    <div style={{backgroundColor:"#fefbd8",padding:"20px 20px"}}>
                    <form onSubmit={this.submitHandler} autoComplete="on">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" value={this.state.email} onChange={this.inputHandler} />
                    </div><br></br>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={this.state.password} onChange={this.inputHandler} />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button><br></br>
                    <Link to="/"><span>register</span></Link>
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
export default Login;

// export default withRouter(Login);