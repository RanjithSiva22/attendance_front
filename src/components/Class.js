import React, { Component } from 'react';
import Student from './StudentList';
// import PropTypes from 'prop-types';

class Class extends Component {
    render() {
        return this.props.students.map((student,index) => (
            <Student key={index} id={index} student={student} studentPresent={this.props.studentPresent} />
        ));
    }
}
    


export default Class;