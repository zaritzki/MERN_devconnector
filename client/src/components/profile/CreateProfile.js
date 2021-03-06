import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';

import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '', 
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value  })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
        }

        // call createProfile with profileData
        this.props.createProfile(profileData, this.props.history);
    }

    render() {
        const { errors, displaySocialInputs} = this.state;

        let socialInputs;
        if (displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup
                        placeholder="Twitter Profile URL"
                        name="twitter"
                        icon="fab fa-twitter"
                        value={this.state.twitter}
                        onChange={this.handleChange}
                        error={errors.twitter}
                    />
                    <InputGroup
                        placeholder="Facebook Page URL"
                        name="facebook"
                        icon="fab fa-facebook"
                        value={this.state.facebook}
                        onChange={this.handleChange}
                        error={errors.facebook}
                    />
                    <InputGroup
                        placeholder="LinkedIn Profile URL"
                        name="linkedin"
                        icon="fab fa-linkedin"
                        value={this.state.linkedin}
                        onChange={this.handleChange}
                        error={errors.linkedin}
                    />
                    <InputGroup
                        placeholder="Youtube Channel URL"
                        name="youtube"
                        icon="fab fa-youtube"
                        value={this.state.youtube}
                        onChange={this.handleChange}
                        error={errors.youtube}
                    />
                    <InputGroup
                        placeholder="Instagram Page URL"
                        name="instagram"
                        icon="fab fa-instagram"
                        value={this.state.instagram}
                        onChange={this.handleChange}
                        error={errors.instagram}
                    />
                </div>
            );
        }
        
        // Select options for Status
        const options = [
            { label: '* Select Professional Status',  value: 0 },
            { label: 'Developer', value: 'Developer' },
            { label: 'Junior Developer', value: 'Junior Developer' },
            { label: 'Senior Developer', value: 'Senior Developer' },
            { label: 'Manager', value: 'Manager' },
            { label: 'Student or Learning', value: 'Student or Learning' },
            { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Other', value: 'Other' }
        ];

        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Create your Profile</h1>
                            <p className="lead text-center">
                                Let's get some information to make your profile stand out
                            </p>
                            <small className="d-block pb-3">* = required field</small>

                            <form onSubmit={this.handleSubmit}>
                                <TextFieldGroup 
                                    placeholder="* Profile Handle"
                                    name="handle"
                                    value={this.state.handle}
                                    onChange={this.handleChange}
                                    error={errors.handle}
                                    info="A unique handle for your profile URL. Your full name, company name, nickname"
                                />
                                <SelectListGroup 
                                    placeholder="Status"
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.handleChange}
                                    options = {options}
                                    error={errors.status}
                                    info="Give us an idea where you are at in your career"
                                />
                                <TextFieldGroup 
                                    placeholder="Company"
                                    name="company"
                                    value={this.state.company}
                                    onChange={this.handleChange}
                                    error={errors.company}
                                    info="Could be your own company or one you work for"
                                />
                                <TextFieldGroup 
                                    placeholder="Website"
                                    name="website"
                                    value={this.state.website}
                                    onChange={this.handleChange}
                                    error={errors.website}
                                    info="Could be your own website or a company one"
                                />
                                <TextFieldGroup 
                                    placeholder="Location"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                    error={errors.location}
                                    info="City or city & state suggested (eg. Boston, MA)"
                                />
                                <TextFieldGroup 
                                    placeholder="* Skills"
                                    name="skills"
                                    value={this.state.skills}
                                    onChange={this.handleChange}
                                    error={errors.skills}
                                    info="Please use comma separated values (eg. HTML, CSS, Javascript, PHP)"
                                />
                                <TextFieldGroup 
                                    placeholder="Github Username"
                                    name="githubusername"
                                    value={this.state.githubusername}
                                    onChange={this.handleChange}
                                    error={errors.githubusername}
                                    info="If you want your lastest repos and Github link, include your username"
                                />
                                <TextAreaFieldGroup 
                                    placeholder="Short Bio"
                                    name="bio"
                                    value={this.state.bio}
                                    onChange={this.handleChange}
                                    error={errors.bio}
                                    info="Tell us a little about yourself"
                                />

                                <div className="mb-3">
                                    <button 
                                        type="button"
                                        onClick={() => {
                                            this.setState(prevState => ({
                                                displaySocialInputs: !prevState.displaySocialInputs
                                            }));
                                        }} 
                                        className="btn btn-light"
                                    >
                                        Add Social Network Links
                                    </button>
                                    <span className="text-muted">Optional</span>
                                </div>
                                {socialInputs}
                                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
    withRouter(CreateProfile)
);
