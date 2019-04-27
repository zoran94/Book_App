import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import LoginForm from "./LoginForm";
import LoginInfo from "./LoginInfo";
import { fetchLogin} from "../../../../../services/authService";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: '',
        }
    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    onLogin = (e) => {
        e.preventDefault();

        const body = {
            email: this.state.email,
            password: this.state.password
        };

        fetchLogin(body)
            .then(() => {
                this.props.history.push('/feed/')
            })
            .catch(error => this.setState({ error }))
    }


    render() {

        return (
            <>
                <LoginInfo />
                <LoginForm
                    name={this.state}
                    onInputChange={this.onInputChange}
                    onLogin={this.onLogin}
                    error={this.state.error}
                />
            </>
        )

    }
}



export default withRouter(Login);