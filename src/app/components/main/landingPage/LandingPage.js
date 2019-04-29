import React from 'react';
import Register from './register/Register';
import Login from './login/Login';


class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { registerUi: true }
    }

    onToggleRegister = () => {
        this.setState((prevState) => {
            return {
                registerUi: !prevState.registerUi
            }
        })
    }

    render () {
    return  this.state.registerUi ? 
    <Register onToggleRegister={this.onToggleRegister}/> :
    <Login onToggleRegister={this.onToggleRegister}/>
    }
}


export default LandingPage;