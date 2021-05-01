import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import PropTypes from 'prop-types'
import { TranslationText } from 'Components/TranslationText'
import { translationText } from 'Utils/translationText'
import EmptySpace from 'Components/EmptySpace'
import bunches from 'Bunches/bunches.json'
import { Link } from 'react-router-dom'
import { FormInput, FormInputIcon } from 'Components/FormsControls'
import Alert from 'Components/UI/alert'
import Rbutton from 'Components/Rbutton'
import Logotype from 'Components/UI/Logotype'
import { isEmpty } from 'lodash'
import { connect } from "react-redux"
import { alertActions } from 'Actions/alert.actions'
import { alertTypes } from 'Constants/alert.constants'
import RButtonIco from 'Components/RButtonIco'
import './LoginForm.scss'


const validationSchema = Yup.object().shape({
    email: Yup
        .string()
        .label('Email')
        .email("Invalid email address")
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
            loginFormInitialValues: {
                email: '', 
                password: '',
            },
            passwordHint: false
        }
    }
    render() {
        const { isLoading, error, loginUser, dispatch, registerError, ...props } = this.props
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
                            initialValues={this.state.loginFormInitialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                const { email, password } = values
                                dispatch(loginUser(email, password))
                            }}>
                            <Form styleName='__oauthForm'>
                                <FormInput
                                    type="email"
                                    name="email"
                                    label="Use your e-mail"
                                    autoComplete="username"/>
                                <FormInput
                                    type={this.state.passwordHint ? 'text' : 'password'}
                                    name="password"
                                    label="Type your password"
                                    autoComplete="current-password">
                                    <FormInputIcon>
                                        <Rbutton
                                            variant='text'
                                            icon={this.state.passwordHint ? 'eye' : 'eye-slash'}
                                            handleClick={() => this.setState({
                                                ...this.state,
                                                passwordHint: !this.state.passwordHint
                                            })}/>
                                    </FormInputIcon>
                                </FormInput>
                                <div styleName='__button'>
                                    <Rbutton
                                        variant='primary'
                                        label="Login"
                                        icon='lock'
                                        asSubmit 
                                        isLoader={isLoading}
                                        handleClick={() => dispatch(alertActions.clear())}/>
                                </div>
                                {!isEmpty(props.alert) && <div styleName='__oauthError'>
                                    <Alert
                                        message={props.alert.message}
                                        type={props.alert.type === alertTypes.WARNING ? 'warning': 'success'}
                                        icon='check-circle'
                                        delay={5000}
                                        show={false}/>
                                </div>}
                            </Form>
                        </Formik>
                        <div styleName='__oauthRegister'>
                            <TranslationText
                                object={bunches}
                                id="registerQuestion"/>
                            <EmptySpace
                                type='normal'/>
                            <Link
                                to='/register'
                                aria-label={translationText(bunches, 'registerNowTitle')}
                                onClick={() => dispatch(alertActions.clear())}>
                                <TranslationText
                                    object={bunches}
                                    id='registerNow'/>
                            </Link>
                        </div>
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
export default connect()(LoginForm)
