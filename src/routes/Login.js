import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { loginUser } from "Actions/auth.js"
import LoginForm from "../components/LoginForm"

class Login extends React.Component {

    render() {
        const { isAuthenticated, isLoading, error } = this.props
        return (
            isAuthenticated
                ? <Redirect to="/" />
                : <LoginForm isLoading={isLoading} error={error} loginUser={loginUser}></LoginForm>
        )
    }
}


const mapStateToProps = state => {
    const { isAuthenticated,
            isLoading,
            error } = state.auth
    return {
        isAuthenticated: isAuthenticated,
        isLoading: isLoading,
        error: error,
    }
}
  export default connect(mapStateToProps)(Login);