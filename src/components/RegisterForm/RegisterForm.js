import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import PropTypes from 'prop-types'
import { FormInput } from 'Components/FormsControls'
import Alert from 'Components/UI/alert'
import TranslationText from 'Components/TranslationText'
import { translationText } from 'Utils/translationText'
import EmptySpace from 'Components/EmptySpace'
import bunches from 'Bunches/bunches.json'
import Rbutton from 'Components/Rbutton'
import { alertActions } from 'Actions/alert.actions'
import { alertTypes } from 'Constants/alert.Constants'
import Logotype from 'Components/UI/Logotype'
import { connect } from "react-redux"
import { isEmpty } from 'lodash'
import { registerUser } from "Actions/auth.js"
import './RegisterForm.scss'
import { Link } from 'react-router-dom'


const validationSchema = Yup.object().shape({
    firstName: Yup
        .string()
        .label('First name')
        .min(3)
        .required(),
    lastName: Yup
        .string()
        .label('Last name')
        .min(3)
        .required(),
    email: Yup
        .string()
        .label('Email')
        .email("Invalid email addresss")
        .required(),
    password: Yup
        .string()
        .label('Password')
        .test(
            "regex",
            "Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
            val => {
              let regExp = new RegExp(
                "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$"
              );
              return regExp.test(val);
            }
        )
        .required(),
    confirmPassword: Yup
        .string()
        .label('Confirm password')
        .required()
        .when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
            )
        })
})
const RegisterForm = ( props ) => {
    const { dispatch, alert, registerError, isLoading, isRegister } = props
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const[registerFields, setRegisterField] = useState({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    });
    return (
        <div styleName='RegisterForm'>
            <div styleName='__inner'>
                <div styleName='__information'>
                    <Logotype isLight/>
                </div>
                <div styleName='__oauth'>
                    <div styleName='__oauthHeader'>Creating an account</div>
                    <div styleName='__oauthSubheader'>
                        Register and start using Wedding Planner
                    </div>
                    {!isRegister && <Formik
                        initialValues={registerFields}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            dispatch(registerUser({...values}))
                        }}>
                            <Form styleName='__oauthForm'>
                                <div styleName='__formElement'>
                                    <FormInput type="text" name="firstName" label="First name" autoComplete="first-name"/>
                                </div>
                                <div styleName='__formElement'>
                                    <FormInput type="text" name="lastName" label="Last name" autoComplete="first-name"/>
                                </div>
                                <div styleName='__formElement'>
                                    <FormInput type="email" name="email" label="E-mail" autoComplete="last-name"/>
                                </div>
                                <div styleName='__formElement'>
                                    <FormInput type="password" name="password" label="Password" autoComplete="current-password"/>
                                </div>
                                <div styleName='__formElement -last'>
                                    <FormInput type="password" name="confirmPassword" label="Confirm password" autoComplete="confirm-password"/>
                                </div>
                                <div styleName='__button'>
                                    <Rbutton variant='primary' label="Register" icon='user' asSubmit isLoader={isLoading}/>
                                </div>
                            </Form>
                        </Formik>}
                    {!isEmpty(alert) && <div styleName='__oauthError'>
                        <Alert message={alert.message} type={props.alert.type === alertTypes.ERROR ? 'warning': 'success'} icon='frown-open'/>    
                    </div>}
                    <div styleName='__oauthRegister'>
                        <TranslationText object={bunches} id="loginNowQuestion"/>
                        <EmptySpace type='normal'/>
                        <Link to='/login' aria-label={translationText(bunches, 'loginNow')} onClick={() => dispatch(alertActions.clear())}>
                            <TranslationText object={bunches} id='loginNow'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        registerAlert: state.auth.registerAlert,
        registerError: state.auth.registerError,
        isLoading: state.auth.isLoading,
        isRegister: state.auth.isRegister,
        alert: state.alert
    }
}
export default connect(mapStateToProps)(RegisterForm)
