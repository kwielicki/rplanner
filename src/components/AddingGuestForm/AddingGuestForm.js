import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import firebase from "firebase/app"
import { db } from "Firebase/firebase"
import { connect } from "react-redux"
import Rbutton from 'Components/Rbutton'
import Switcher from 'Components/UI/Switcher'
import FormsGrouper from 'Components/UI/Forms/FormsGrouper'
import FormsActions from 'Components/UI/Forms/FormsActions'
import { maskForMobilePhone } from 'Components/Helpers/inputMasks'
import { REGEXP__mobilePhone, REGEXP__personName } from 'Utils/regexps'
import { FormInput, FormInputByMask, FormTextarea, FormSelect } from 'Components/FormsControls'
import bunches from 'Bunches/bunches.json'
import './AddingGuestForm.scss'

const validationSchema = Yup.object().shape({
    firstName: Yup
        .string()
        .required()
        .min(3)
        .matches(REGEXP__personName, 'This field can only contain letters')
        .label('First name'),
    lastName: Yup
        .string()
        .required()
        .min(3)
        .matches(REGEXP__personName, 'This field can only contain letters')
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
                .integer()
                .label('Expected number of guests')
                .typeError('You must specify a number')
        }),
    phoneNumber: Yup
        .string()
        .max(11)
        .matches(REGEXP__mobilePhone, {
            message: 'Phone number is not valid. Expected format xxx-yyy-zzz'
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
        .label('Additional information'),
    partner: Yup
        .object()
        .shape({
            firstName: Yup
                .string()
                .min(3)
                .matches(REGEXP__personName, 'This field can only contain letters')
                .label('First name'),
            lastName: Yup
                .string()
                .min(3)
                .matches(REGEXP__personName, 'This field can only contain letters')
                .label('Last name'),
            status: Yup
                .bool()
        })
})

class AddingGuestForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            guestAffiliation: bunches.guestAffiliation,
            guestStatus: bunches.guestStatus,
            guest: bunches.guestModel,
            isSubmitting: false,
            isChecked: false,
        }
    }

    componentDidMount = () => {
        const { user: { email, uid }, ownerData: { fullName } } = this.props

        this.setState({
            owner: { name: fullName, email: email },
            uid: uid
        })
    }

    __onChange = () => {
        this.setState({isChecked: !this.state.isChecked})
    }

    render() {
        return (
            <div styleName='AddingGuestForm'>
                <Formik
                    initialValues={this.state.guest}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        this.setState({isSubmitting: true})
                        db.collection('guests').doc(this.state.uid).collection('guest').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            owner: this.state.owner,
                            guest: {
                                fullName: `${values.firstName} ${values.lastName}`,
                                isPartner: this.state.isChecked,
                                ...values
                            }
                        })
                        .then(() => {
                            this.setState({isSubmitting: false})
                            this.setState({isChecked: false})
                            resetForm()
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
                                <FormInputByMask type="text"
                                           name="phoneNumber"
                                           label="Phone number"
                                           mask={maskForMobilePhone}
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
                            <FormsGrouper>
                                <Switcher
                                    checked={this.state.isChecked}
                                    color='primary'
                                    onChange={this.__onChange}
                                    name='partner.status'
                                    label='Add an accompanying person'/>
                            </FormsGrouper>
                            {this.state.isChecked &&
                                <FormsGrouper>
                                    <FormInput 
                                        type="text"
                                        name="partner.firstName"
                                        label="First name"
                                        variant="halfWidth"/>
                                    <FormInput 
                                        type="text"
                                        name="partner.lastName"
                                        label="Last name"
                                        variant="halfWidth"/>
                                </FormsGrouper>
                            }
                            <FormsActions>
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
        user: state.auth.user,
        ownerData: state.auth.ownerData
    }
}
export default connect(mapStateToProps)(AddingGuestForm)
