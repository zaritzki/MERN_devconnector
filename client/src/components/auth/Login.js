import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';

// Load the common TextFieldGroup
import TextFieldGroup from '../common/TextFieldGroup';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // Check if Logged In
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors });
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value  })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userData);

    }

    render() {
        const { errors } = this.state;

        return (
            <div className="login">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <p className="lead text-center">Sign in to your DevConnector account</p>

                    <form noValidate onSubmit={this.handleSubmit}>

                        <TextFieldGroup
                            placeholder = 'Email Address'
                            name = 'email'
                            type = 'email'
                            value = {this.state.email}
                            onChange = {this.handleChange}
                            error = {errors.email}
                        />

                        <TextFieldGroup
                            placeholder = 'Password'
                            name = 'password'
                            type = 'password'
                            value = {this.state.password}
                            onChange = {this.handleChange}
                            error = {errors.password}
                        />
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser})(Login);