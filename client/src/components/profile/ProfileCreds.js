import React, { Component } from 'react';
import Moment from 'react-moment';

class ProfileCreds extends Component {
    render() {
        const { experience, education } = this.props;

        const expItems = experience.map(exp => (
            <li key={exp._id} className="list-group-item">
                <h4>{exp.company}</h4>
                <p>
                    <Moment format="DD MMM YYYY">{exp.from}</Moment> - 
                    {exp.to === null ? (' Now') : (<span> <Moment format="DD MMM YYYY">{exp.to}</Moment></span>)}
                </p>
                <p><strong>Position:</strong> {exp.title}</p>
                {exp.location === null ? null : (<p><strong>Location:</strong> {exp.location}</p>)}
                <p><strong>Description:</strong> {exp.description === '' ? (<span className="text-muted font-italic">No description..</span>) : (<span>{exp.description}</span>)}</p>
            </li>
        ));

        const eduItems = education.map(edu => (
            <li key={edu._id} className="list-group-item">
                <h4>{edu.school}</h4>
                <p>
                    <Moment format="DD MMM YYYY">{edu.from}</Moment> - 
                    {edu.to === null ? (' Now') : (<span> <Moment format="DD MMM YYYY">{edu.to}</Moment></span>)}
                </p>
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Field of Study:</strong> {edu.fieldofstudy}</p>
                <p><strong>Description:</strong> {edu.description === '' ? (<span className="text-muted font-italic">No description..</span>) : (<span>{edu.description}</span>)}</p>
            </li>
        ));

        return (
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center text-info">Experience</h3>
                    {expItems.length > 0 ? (                    
                        <ul className="list-group">
                            {expItems}
                        </ul>
                    ) : (
                        <p className="text-muted font-italic text-center">No experience listed</p>
                    )}
                </div>
                <div className="col-md-6">
                    <h3 className="text-center text-info">Education</h3>
                    {eduItems.length > 0 ? (                    
                        <ul className="list-group">
                            {eduItems}
                        </ul>
                    ) : (
                        <p className="text-muted font-italic text-center">No education listed</p>
                    )}
                </div>
            </div>
        )
    }
}

export default ProfileCreds;
