import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from "react-redux"
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import { isEmpty } from 'lodash'
import TextInput from 'Components/FormsControls'
import Container from 'Components/Grid/Container'
import Column from 'Components/Grid/Column'
import PageTitle from 'Components/UI/PageTitle'
import translations from 'Translations/translations.json'
import UserData from 'Components/UserData'
import ShadowedBox from 'Components/UI/ShadowedBox'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = Yup.object().shape({
    userEmail: Yup
        .string()
        .label('Email')
        .email("Invalid email addresss")
        .required(),
    userName: Yup
        .string()
        .label('User name')
        .required(),
    phoneNumber: Yup
        .string()
        .label('Phone number')
        .matches(phoneRegExp, 'Phone number is not valid')
})

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userAvatar: '',
            userPhoneNumber: null,
            userCreationTime: null,
            userLastSignInTime: null,
            translations: {
                pageTitle: translations.userProfile.pageTitle
            }
        }
    }

    componentDidMount = () => {
        const { user: {
                    displayName, email, photoURL,
                    metadata: { creationTime, lastSignInTime}
                } 
            } = this.props

        this.setState({
            userName: displayName,
            userEmail: email,
            userPhotoUrl: photoURL,
            userCreationTime: creationTime,
            userLastSignInTime: lastSignInTime
        })

    }
    
    render() {
        const { userName,userEmail, userPhotoUrl, userCreationTime, userLastSignInTime,
                translations: { pageTitle }, user } = this.state
        return (
            <>
                <Helmet>
                    <title>User profile</title>
                </Helmet>

                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/user-profile'>User profile</BreadcrumbsItem>

                <Container>
                    <Column xs='1'>
                        <PageTitle supTitle={pageTitle.supTitle}
                                   subTitle={pageTitle.subTitle}/>
                    </Column>
                </Container>

                <Container>
                    <Column lg='3' spacerBottom='30'>
                        <UserData userAvatar={userPhotoUrl}
                                  userName={userName}
                                  userEmail={userEmail}
                                  userCreationTime={userCreationTime}
                                  userLastSignInTime={userLastSignInTime}/>
                    </Column>
                    <Column lg='3'>
                        {!_.isEmpty(this.state.userEmail) &&
                            <ShadowedBox>
                                <Formik
                                    initialValues={this.state}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => {
                                        const { userName, userEmail } = values
                                    }}>
                                    <Form disabled>
                                        <TextInput type="text"
                                                   name="userName"
                                                   label="User name"
                                                   autoComplete="off"/>
                                        <TextInput type="email"
                                                   name="userEmail"
                                                   label="User email"
                                                   autoComplete="off"/>
                                        <TextInput type="text"
                                                   name="phoneNumber"
                                                   label="Phone number"
                                                   autoComplete="off"/>
                                    </Form>
                                </Formik>
                            </ShadowedBox>
                        }
                    </Column>
                    <Column lg='3'>
                        <ShadowedBox>Here will be an avatar uploader. In progress...</ShadowedBox>
                    </Column>
                </Container>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(UserProfile)