import React, { useState } from "react"
import { useField, Field } from "formik"
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from './FormsControls.scss'
import SelectSomething from 'Components/UI/SelectSomething'

function TextInput({ label, ...props }) {
    const [field, meta] = useField(props)
    const [isFocused, isFocusedSet] = useState(false)
    const setOfStateClasses = {
        'isError': meta.touched && meta.error,
        'isFocused': isFocused,
        'isDirty': field.value,
        'isValid': meta.touched && !meta.error
    }
    const labelClasses = Object.assign({}, setOfStateClasses, { '__label': true })
    const inputClasses = Object.assign({}, setOfStateClasses, { '__input': true })
    return (
        <div styleName={classNames({
            'FormElement': true,
            [`--${props.variant}`]: props.variant ? true : false
        })}>
            <div styleName='__group'>
                <label styleName={classNames(labelClasses)} htmlFor={props.name}>
                    {label}&nbsp;
                    {meta.touched && meta.error ? (<span>*</span>) : null}
                </label>
                <Field styleName={classNames(inputClasses)} {...field} {...props}
                       onBlur={(e) => {field.onBlur(e); isFocusedSet(!isFocused)}} 
                       onFocus={(e) => {isFocusedSet(true)}}/>
            </div>
                {meta.touched && meta.error ? (
                    <div styleName="__error" role="alert">{meta.error}</div>
                ) : null}
        </div>
    )
}
TextInput.propTypes = {
    variant: PropTypes.oneOf(['halfWidth', 'fullWidth'])
}

function TextareaInput({ label, ...props }) {
    const [field, meta] = useField(props)
    const [isFocused, isFocusedSet] = useState(false)
    const setOfStateClasses = {
        'isError': meta.touched && meta.error,
        'isFocused': isFocused,
        'isDirty': field.value,
        'isValid': meta.touched && !meta.error,
        '--textarea': true
    }
    const labelClasses = Object.assign({}, setOfStateClasses, { '__label': true })
    const inputClasses = Object.assign({}, setOfStateClasses, { '__input': true })
    return (
        <div styleName={classNames({
            'FormElement': true,
            [`--${props.variant}`]: props.variant ? true : false
        })}>
            <div styleName='__group'>
                <label styleName={classNames(labelClasses)} htmlFor={props.name}>
                    {label}&nbsp;
                    {meta.touched && meta.error ? (<span>*</span>) : null}
                </label>
                <Field styleName={classNames(inputClasses)} {...field} {...props}
                       onBlur={(e) => {field.onBlur(e); isFocusedSet(!isFocused)}} 
                       onFocus={(e) => {isFocusedSet(true)}}
                       component='textarea'/>
            </div>
                {meta.touched && meta.error ? (
                    <div styleName="__error" role="alert">{meta.error}</div>
                ) : null}
        </div>
    )
}
function SelectInput({ label, ...props }) {
    const [field, meta] = useField(props)
    return (
        <div styleName={classNames({
            'FormElement': true,
            [`--${props.variant}`]: props.variant ? true : false
        })}>
            <SelectSomething {...field} {...props} 
                             options={props.options}
                             defaultOption={props.defaultOption}/>
            {meta.touched && meta.error ? (
                    <div styleName="__error" role="alert">{meta.error}</div>
                ) : null}
        </div>
    )
}

TextareaInput.propTypes = {
    variant: PropTypes.oneOf(['halfWidth', 'fullWidth'])
}


export const FormInput = CSSModules(styles, {allowMultiple: true})(TextInput)
export const FormTextarea = CSSModules(styles, {allowMultiple: true})(TextareaInput)
export const FormSelect = CSSModules(styles, {allowMultiple: true})(SelectInput)