import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import { db } from "Components/firebase/firebase.js"
import { connect } from "react-redux"
import { FormInput, FormTextarea, FormSelect } from 'Components/FormsControls'
import Moment from 'moment'
import Rbutton from 'Components/Rbutton'
import Button from 'Components/Rbutton'
import CSSModules from 'react-css-modules'
import styles from './AddingGuestForm.scss'
import FormsGrouper from 'Components/UI/Forms/FormsGrouper'
import FormsActions from 'Components/UI/Forms/FormsActions'
import bunches from 'Bunches/bunches.json'

const phoneRegExp = /1?-?\(?[0-9]{3}[\-\)]/
const validationSchema = Yup.object().shape({
    firstName: Yup
        .string()
        .required()
        .min(3)
        .matches(/^[A-Za-z]+$/, 'This field can only contain letters')
        .label('First name'),
    lastName: Yup
        .string()
        .required()
        .min(3)
        .matches(/^[A-Za-z]+$/, 'This field can only contain letters')
        .label('Last name'),
    numberOfGuests: Yup
        .object()
        .shape({
            adult: Yup
                .number()
                .required()
                .positive()
                .integer()
                .label('Expected number of guests')
                .typeError('You must specify a number'),
            children: Yup
                .number()
                .positive()
                .integer((evt) => console.log(Evt))
                .label('Expected number of guests')
                .typeError('You must specify a number')
        }),
    phoneNumber: Yup
        .string()
        .max(11)
        .matches(phoneRegExp, {
            message: 'Phone number is not valid. Expected format 111-222-333'
        })
        .label('Phone number'),
    emailAddress: Yup
        .string()
        .email()
        .label('Email'),
    guestAffiliation: Yup
        .string()
        .required('Guest affiliation is required!'),
    guestStatus: Yup
        .string()
        .required('Guest status is required!'),
    additionalInformation: Yup
        .string()
        .max(250)
        .label('Additional information')
        
})

@CSSModules(styles, {allowMultiple: true})
class AddingGuestForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            guestAffiliation: bunches.guestAffiliation,
            guestStatus: bunches.guestStatus,
            guest: {
                firstName: '',
                lastName: '',
                guestAffiliation: '',
                guestStatus: '',
                numberOfGuests: {
                    adult: '',
                    children: ''
                },
                phoneNumber: '',
                emailAddress: '',
                additionalInformation: ''
            },
            isSubmitting: false,
            creator: {
                name: '',
                email: ''
            }
        }
    }

    componentDidMount = () => {
        const { user: { displayName, email } } = this.props
        this.setState({
            creator: {
                name: displayName,
                email: email
            }
        })
    }

    render() {
        return (
            <div styleName='AddingGuestForm'>
                <Formik
                    initialValues={this.state.guest}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        this.setState({isSubmitting: true})
                        db.collection('guests').add({
                            created: new Date(),
                            creator: this.state.creator,
                            guest: {
                                ...values
                            }
                        })
                        .then(() => {
                            this.setState({isSubmitting: false})
                        })
                        .catch(err => console.log(err))
                    }}>{({ dirty, handleReset }) => (
                        <Form>
                            <FormsGrouper>
                                <FormInput type="text"
                                           name="firstName"
                                           label="First name"
                                           variant="halfWidth"/>
                                <FormInput type="text"
                                           name="lastName"
                                           label="Last name"
                                           variant="halfWidth"/>
                            </FormsGrouper>
                            <FormsGrouper>
                                <FormInput type="text"
                                           name="numberOfGuests.adult"
                                           label="Expected number of guests"
                                           variant="halfWidth"/>
                                <FormInput type="text"
                                           name="numberOfGuests.children"
                                           label="Expected number of children"
                                           variant="halfWidth"/>
                            </FormsGrouper>
                            <FormsGrouper>
                                <FormSelect options={this.state.guestAffiliation}
                                            name="guestAffiliation"
                                            defaultOption="Choose guest affiliation"
                                            variant="halfWidth"
                                            isFluid
                                            isGray/>
                                <FormSelect options={this.state.guestStatus}
                                            name="guestStatus"
                                            defaultOption="Choose guest status"
                                            variant="halfWidth"
                                            isFluid
                                            isGray/>
                            </FormsGrouper>
                            <FormsGrouper>
                                <FormInput type="text"
                                           name="phoneNumber"
                                           label="Phone number"
                                           variant="halfWidth"/>
                                <FormInput type="email"
                                           name="emailAddress"
                                           label="Email"
                                           variant="halfWidth"/>
                            </FormsGrouper>
                            <FormsGrouper>
                                <FormTextarea name="additionalInformation"
                                              label="Additional information"
                                              variant="halfWidth"/>
                            </FormsGrouper>
                            <FormsActions>
                                {console.log(dirty)}
                                <Rbutton  variant='primary'
                                          label="Add an guest" 
                                          asSubmit 
                                          isLoader={this.state.isSubmitting}
                                          disabled={!dirty || this.state.isSubmitting}
                                          icon='check'
                                          size='xLarge'
                                          space='spaceRight'/>
                                <Rbutton variant='secondary'
                                             handleClick={handleReset}
                                             label='Reset form'
                                             icon='trash-alt'
                                             size='xLarge'
                                             disabled={!dirty || this.state.isSubmitting}/>
                            </FormsActions>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(AddingGuestForm)