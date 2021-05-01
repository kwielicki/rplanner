import React, { useState } from "react"
import { useField, Field } from "formik"
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './FormsControls.scss'
import SelectSomething from 'Components/UI/SelectSomething'
import MaskedInput from 'react-text-mask'

function TextInput({ label, children, ...props }) {
    const [field, meta] = useField(props)
    const [isFocused, isFocusedSet] = useState(false)
    const setOfStateClasses = {
        'isError': meta.touched && meta.error,
        'isFocused': isFocused,
        'isDirty': field.value,
        'isValid': meta.touched && !meta.error
    }
    const labelClasses = Object.assign({}, setOfStateClasses, { '__label': true })
    const inputClasses = Object.assign({}, setOfStateClasses, {
        '__input': true,
        '-inputHint': children ? true : false
    })
    return (
        <div styleName={classNames({
            'FormElement': true,
            [`-${props.variant}`]: props.variant ? true : false
        })}>
            <div styleName='__group'>
                <label styleName={classNames(labelClasses)} htmlFor={props.name}>
                    {label}&nbsp;
                    {meta.touched && meta.error ? (<span>*</span>) : null}
                </label>
                <Field styleName={classNames(inputClasses)} {...field} {...props}
                       onBlur={(e) => {field.onBlur(e); isFocusedSet(!isFocused)}} 
                       onFocus={(e) => {isFocusedSet(true)}}/>
                {children}
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
        '-textarea': true
    }
    const labelClasses = Object.assign({}, setOfStateClasses, { '__label': true })
    const inputClasses = Object.assign({}, setOfStateClasses, { '__input': true })
    return (
        <div styleName={classNames({
            'FormElement': true,
            [`-${props.variant}`]: props.variant ? true : false
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
            [`-${props.variant}`]: props.variant ? true : false
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

function TextInputByMask({ label, ...props}) {
    const [field, meta] = useField(props)
    const [isFocused, isFocusedSet] = useState(false)
    const setOfStateClasses = {
        'isError': meta.touched && meta.error,
        'isFocused': isFocused,
        'isDirty': field.value,
        'isValid': meta.touched && !meta.error
    }
    const labelClasses = Object.assign({}, setOfStateClasses, { '__label': true })
    return (
        <div styleName={classNames({
            'FormElement': true,
            [`-${props.variant}`]: props.variant ? true : false
        })}>
            <div styleName='__group'>
                <label styleName={classNames(labelClasses)} htmlFor={props.name}>
                    {label}&nbsp;
                    {meta.touched && meta.error ? (<span>*</span>) : null}
                </label>
                <Field
                    {...field}
                    render={({ field }) => (
                        <MaskedInput
                            {...field}
                            className={styles.__input}
                            onBlur={(e) => {field.onBlur(e); isFocusedSet(!isFocused)}}
                            onFocus={(e) => isFocusedSet(true)}
                            mask={props.mask}
                        />
                    )}
                    />
            </div>
                {meta.touched && meta.error ? (
                    <div styleName="__error" role="alert">{meta.error}</div>
                ) : null}
        </div>
    )
}
TextInputByMask.propTypes = {
    mask: PropTypes.array.isRequired
}

const TextInputIcon = ({children}) => {
    return (
        <div styleName='TextInputIcon'>
            {children}
        </div>
    )
}

export const FormInput = TextInput
export const FormInputIcon = TextInputIcon
export const FormInputByMask = TextInputByMask
export const FormTextarea = TextareaInput
export const FormSelect = SelectInput