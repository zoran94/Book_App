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
    return(
        <>
        <button onClick={this.onToggleRegister} className="btn">Register</button>
        <button onClick={this.onToggleRegister} className="btn">Login</button>
        {this.state.registerUi ? <Register/> : <Login/>}
        </>
        )
      
    }
}


export default LandingPage;