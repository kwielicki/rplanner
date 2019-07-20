import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom'
import styles from './Megamenu.scss'

class Megamenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfRoutes: [{
                    linkUrl: '/',
                    linkTitle: 'Dashboard',
                    linkLabel: 'Dashboard'
                }, {
                    linkUrl: 'adding-guest',
                    linkTitle: 'Add a guest',
                    linkLabel: 'Add a guest'
                }, {
                    linkUrl: 'editing-guest',
                    linkTitle: 'Editing a guest',
                    linkLabel: 'Editing a guest'
                }, {
                    linkUrl: 'statistic',
                    linkTitle: 'Statistic',
                    linkLabel: 'Statistic'
                }, {
                    linkUrl: 'user-profile',
                    linkTitle: 'User Profile',
                    linkLabel: 'User Profile'
                }, {
                    linkUrl: 'documentation',
                    linkTitle: 'Documentation',
                    linkLabel: 'Documentation'
                }
            ]
        }
    }
    render() {
        return (
            <nav styleName='Megamenu'>
                <ul styleName='__list'>
                    {this.state.listOfRoutes.map(({linkUrl, linkTitle, linkLabel},index) => {
                        return (
                            <li key={index} styleName='__listElement'>
                                <Link to={linkUrl} title={linkTitle} styleName='__listAnchor'>
                                    {linkLabel}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default CSSModules(Megamenu,styles)
