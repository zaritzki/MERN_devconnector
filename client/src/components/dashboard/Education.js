import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
    handleDelete(id) {
        this.props.deleteEducation(id);
    }

    render() {
        const education = this.props.education.map(edu =>(
            <tr key={edu._id}>
                <td>{edu.school}</td>
                <td>{edu.degree}</td>
                <td>
                    <Moment format="DD MMM YYYY">{edu.from}</Moment> - 
                    {edu.to === null ? (
                        ' Now'
                    ) : (
                        <span> <Moment format="DD MMM YYYY">{edu.to}</Moment></span>
                    )}
                </td>
                <td><button onClick={this.handleDelete.bind(this, edu._id)} className="btn btn-danger">Delete</button></td>
            </tr>
        ))
        return (
            <div>
                <h5 className="mb-2 text-muted">Education Credentials</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>Degree</th>
                            <th>Period</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {education}
                    </tbody>
                </table>
            </div>
        )
    }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);
