import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
    handleDelete(id) {
        this.props.deleteExperience(id);
    }

    render() {
        const experience = this.props.experience.map(exp =>(
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td>
                    <Moment format="DD MMM YYYY">{exp.from}</Moment> - 
                    {exp.to === null ? (
                        ' Now'
                    ) : (
                        <span> <Moment format="DD MMM YYYY">{exp.to}</Moment></span>
                    )}
                </td>
                <td><button onClick={this.handleDelete.bind(this, exp._id)} className="btn btn-danger">Delete</button></td>
            </tr>
        ))
        return (
            <div>
                <h5 className="mb-2  text-muted">Experience Credentials</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Period</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {experience}
                    </tbody>
                </table>
            </div>
        )
    }
}

Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, { deleteExperience })(Experience);