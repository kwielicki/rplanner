import React, { useState } from "react"
import { useField } from "formik"
import CSSModules from 'react-css-modules'
import { Field } from 'formik'
import styles from './FormsControls.scss'
import classNames from 'classnames'

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
        <div styleName='FormElement'>
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

export default CSSModules(styles, {allowMultiple: true})(TextInput)