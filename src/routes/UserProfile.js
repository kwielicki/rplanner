import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from "react-redux"
import Moment from 'react-moment'
import Column from 'Components/Grid/Column'
import LazyImage from 'Components/LazyImage'
import PageTitle from 'Components/UI/PageTitle'
import translations from 'Translations/translations.json'

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userAvatar: '',
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
                translations: { pageTitle } } = this.state
        return (
            <>
                <Helmet>
                    <title>User profile</title>
                </Helmet>
                <Column xs='1'>
                    <PageTitle supTitle={pageTitle.supTitle}
                               subTitle={pageTitle.subTitle}/>
				</Column>
                <ul>
                    <li>UserName: <strong>{userName}</strong></li>
                    <li>UserEmail: <strong>{userEmail}</strong></li>
                    <li>userPhotoUrl: <LazyImage src={userPhotoUrl} alt="userPhotoUrl"/></li>
                    <li>creationTime: <strong><Moment date={userCreationTime} format="D MMM YYYY, hh:mm:ss"/></strong></li>
                    <li>lastSignInTime: <strong><Moment date={userLastSignInTime} format="D MMM YYYY, hh:mm:ss"/></strong></li>
                </ul>
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