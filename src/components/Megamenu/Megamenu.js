import React from 'react';
import { NavLink } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import _ from 'lodash';
import styles from './Megamenu.scss'
import { defineMessages, injectIntl } from 'react-intl';

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
    },
    MegamenuNews: {
        id: 'Megamenu_news',
        defaultMessage: 'News'
    }
})

@CSSModules(styles, {allowMultiple: true})
class Megamenu extends React.Component {
    state = {
        isActive: null,
        listOfRoutes: []
    }

    componentDidMount() {
        const { intl } = this.props
        this.setState({
            isActive: styles.isActive,
            listOfRoutes: [{
                    linkUrl: '/',
                    linkTitle: intl.formatMessage(messages.MegamenuDashboard),
                    linkLabel: intl.formatMessage(messages.MegamenuDashboard)
                }, {
                    linkUrl: '/adding-guest',
                    linkTitle: intl.formatMessage(messages.MegamenuAddingGuest),
                    linkLabel: intl.formatMessage(messages.MegamenuAddingGuest)
                }, {
                    linkUrl: '/statistic',
                    linkTitle: intl.formatMessage(messages.MegamenuStatistics),
                    linkLabel: intl.formatMessage(messages.MegamenuStatistics)
                }, {
                    linkUrl: '/user-profile',
                    linkTitle: intl.formatMessage(messages.MegamenuUserProfile),
                    linkLabel: intl.formatMessage(messages.MegamenuUserProfile)
                }, {
                    linkUrl: '/documentation',
                    linkTitle: intl.formatMessage(messages.MegamenuDocumentation),
                    linkLabel: intl.formatMessage(messages.MegamenuDocumentation)
                }, {
                    linkUrl: '/news',
                    linkTitle: intl.formatMessage(messages.MegamenuNews),
                    linkLabel: intl.formatMessage(messages.MegamenuNews)
                }
            ]
        })
    }

    render() {
        const { isActive } = this.props.styles
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


export default injectIntl(Megamenu)
