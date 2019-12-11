import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import TextInput from 'Components/FormsControls'
import Alert from 'Components/UI/Alert'
import Rbutton from 'Components/Rbutton'
import Logotype from 'Components/UI/Logotype'
import { connect } from "react-redux"
import styles from './LoginForm.scss'

const validationSchema = Yup.object().shape({
    email: Yup
        .string()
        .label('Email')
        .email("Invalid email addresss")
        .required(),
    password: Yup
        .string()
        .label('Password')
        .required()
})

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }
    
    render() {
        const { isLoading, error, loginUser, dispatch } = this.props
        return (
            <div styleName='LoginForm'>
                <div styleName='__inner'>
                    <div styleName='__information'>
                        <Logotype isLight/>
                    </div>
                    <div styleName='__oauth'>
                        <div styleName='__oauthHeader'>Login</div>
                        <div styleName='__oauthSubheader'>
                            Welcome to Wedding Planner!
                            The perfect application for the perfect moment.
                        </div>
                        <Formik
                            initialValues={this.state}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                const { email, password } = values
                                dispatch(loginUser(email, password))
                            }}>
                                <Form styleName='__oauthForm'>
                                    <TextInput type="email" name="email" label="Use your e-mail"/>
                                    <TextInput type="password" name="password" label="Type your password"/>
                                    <div styleName='__button'>
                                        <Rbutton variant='primary' label="Login" icon='lock' asSubmit isLoader={isLoading}/>
                                    </div>
                                    {error && <div styleName='__oauthError'>
                                        <Alert message={error} type='warning' icon='frown-open'/>
                                    </div>}
                                </Form>
                            </Formik>
                    </div>
                </div>
            </div>
        )
    }
}

LoginForm.propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    loginUser: PropTypes.any
}
const LoginFormWithCssModules = CSSModules(LoginForm, styles, {allowMultiple: true})
export default connect()(LoginFormWithCssModules)