import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { loginUser } from "Actions/auth.js"
import LoginForm from "../components/LoginForm"

class Login extends React.Component {

    render() {
        const { isAuthenticated, isLoading, error, registerAlert, registerError, alert} = this.props
        return (
            isAuthenticated
                ? <Redirect to="/" />
                : <LoginForm
                    isLoading={isLoading}
                    error={error}
                    loginUser={loginUser}
                    registerError={registerError}
                    alert={alert}/>
        )
    }
}


const mapStateToProps = state => {
    const { isAuthenticated,
            isLoading,
            error,
            registerError,
            registerAlert } = state.auth
    const { alert } = state
    return {
        isAuthenticated: isAuthenticated,
        isLoading: isLoading,
        error: error,
        registerError: registerError,
        registerAlert: registerAlert,
        alert: alert
    }
}
  export default connect(mapStateToProps)(Login)