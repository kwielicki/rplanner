import React from 'react';
import { NavLink, IndexLink } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import _ from 'lodash';
import styles from './Megamenu.scss'

@CSSModules(styles, {allowMultiple: true})
class Megamenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfRoutes: [{
                    linkUrl: '/',
                    linkTitle: 'Dashboard',
                    linkLabel: 'Dashboard'
                }, {
                    linkUrl: '/adding-guest',
                    linkTitle: 'Add a guest',
                    linkLabel: 'Add a guest'
                }, {
                    linkUrl: '/editing-guest',
                    linkTitle: 'Editing a guest',
                    linkLabel: 'Editing a guest'
                }, {
                    linkUrl: '/statistic',
                    linkTitle: 'Statistic',
                    linkLabel: 'Statistic'
                }, {
                    linkUrl: '/user-profile',
                    linkTitle: 'User Profile',
                    linkLabel: 'User Profile'
                }, {
                    linkUrl: '/documentation',
                    linkTitle: 'Documentation',
                    linkLabel: 'Documentation'
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
