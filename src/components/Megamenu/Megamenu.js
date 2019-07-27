import React from 'react';
import { NavLink } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import _ from 'lodash';
import styles from './Megamenu.scss'
import { FormattedMessage,defineMessages } from 'react-intl';

const messages = defineMessages({
    MegamenuDashboard: {
        id: 'Megamenu_dashboard',
        defaultMessage: 'Dashboard'
    },
    MegamenuAddingGuest: {
        id: 'Megamenu_addiding_guest',
        defaultMessage: 'Add a new guest'
    },
    MegamenuStatistics: {
        id: 'Megamenu_statistics',
        defaultMessage: 'Statistics'
    },
    MegamenuUserProfile: {
        id: 'Megamenu_user_profile',
        defaultMessage: 'User profile'
    },
    MegamenuDocumentation: {
        id: 'Megamenu_documentation',
        defaultMessage: 'Documentation'
    }
})

@CSSModules(styles, {allowMultiple: true})
class Megamenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfRoutes: [{
                    linkUrl: '/',
                    linkTitle: <FormattedMessage {...messages.MegamenuDashboard}/>,
                    linkLabel: <FormattedMessage {...messages.MegamenuDashboard}/>
                }, {
                    linkUrl: '/adding-guest',
                    linkTitle: <FormattedMessage {...messages.MegamenuAddingGuest}/>,
                    linkLabel: <FormattedMessage {...messages.MegamenuAddingGuest}/>
                }, {
                    linkUrl: '/statistic',
                    linkTitle: <FormattedMessage {...messages.MegamenuStatistics}/>,
                    linkLabel: <FormattedMessage {...messages.MegamenuStatistics}/>
                }, {
                    linkUrl: '/user-profile',
                    linkTitle: <FormattedMessage {...messages.MegamenuUserProfile}/>,
                    linkLabel: <FormattedMessage {...messages.MegamenuUserProfile}/>
                }, {
                    linkUrl: '/documentation',
                    linkTitle: <FormattedMessage {...messages.MegamenuDocumentation}/>,
                    linkLabel: <FormattedMessage {...messages.MegamenuDocumentation}/>
                }
            ],
            isActive: null
        }
    }

    componentDidMount() {
        this.setState({
            isActive: styles.isActive
        })
    }

    render() {
        const { isActive } = this.state
        return (
            <nav styleName='Megamenu'>
                <ul styleName='__list'>
                    {this.state.listOfRoutes.map(({linkUrl, linkTitle, linkLabel},index) => {
                        return (
                            <li key={index} styleName='__listElement'>
                                <NavLink to={linkUrl} title={linkTitle} activeClassName={isActive} exact={true} styleName={classNames({
                                    '__listAnchor': true
                                })}>
                                    {linkLabel}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}


export default Megamenu
