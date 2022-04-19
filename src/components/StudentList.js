import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../styles/studlist.css';

export class StudentList extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.student.status ? '#49B66E' : '#fff',
            color: this.props.student.status ? '#fff' : '#3b3b3b'
        }
    }

    render() {
        const { Roll_no, Name , status } = this.props.student;

        return (
            <div style={this.getStyle()} className="contain">
                <table>
                    <tr>
                    <td>{Roll_no}</td>

                        {/* <td>{this.props.id}</td> */}
                        {/* <td className="nameCol">{Roll_no}</td> */}

                        <td className="nameCol">{Name}</td>

                        <td className="switchCol">
                            {this.props.student.status ? 'present ' : 'absent '}
                            <label class="switch">
                                <input type="checkbox" onChange={this.props.studentPresent.bind(this,this.props.id)} defaultChecked={status} />
                                <span class="slider round"></span>
                            </label>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}



export default StudentList;
