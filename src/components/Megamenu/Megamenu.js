import React from 'react'
import './Megamenu.scss'
import MegamenuElement from './MegamenuElement'
import ROUTES from "Root/src/routes.const"

class Megamenu extends React.Component {
    state = {
        megamenuLinks: []
    }

    componentDidMount() {
        this.setState({
            megamenuLinks: [
                {
                    header: 'Get started',
                    sets: [
                        { linkUrl: ROUTES.homepage, linkTitle: 'Dashboard', linkIcon: 'home' }
                    ]
                },{
                    header: 'Content',
                    sets: [
                        { linkUrl: ROUTES.manageGuestList, linkTitle: 'Manage guest list', linkIcon: 'users' },
                        { linkUrl: ROUTES.addGuest, linkTitle: 'Add a new guest', linkIcon: 'user-plus' },
                        { linkUrl: ROUTES.statistic, linkTitle: 'Statistic', linkIcon: 'chart-bar' },
                        { linkUrl: ROUTES.weddingOrganizer, linkTitle: 'Wedding organizer', linkIcon: 'address-card' },
                        { linkUrl: ROUTES.notebook, linkTitle: 'Notebook', linkIcon: 'clipboard' },
                        { linkUrl: ROUTES.expanses, linkTitle: 'Expenses', linkIcon: 'funnel-dollar' }
                    ]
                },{
                    header: 'Help & FAQ',
                    sets: [
                        { linkUrl: ROUTES.documentation, linkTitle: 'Documentation', linkIcon: 'book' }
                    ]
                },{
                    header: 'Account',
                    sets: [
                        { linkUrl: ROUTES.userProfile, linkTitle: 'User profile', linkIcon: 'users-cog' },
                    ]
                },{
                    header: 'Additional functionalities',
                    sets: [
                        { linkUrl: ROUTES.news, linkTitle: 'News', linkIcon: 'images' }
                    ]
                }
            ]
        })
    }

    render() {
        const { megamenuLinks } = this.state
        return (
            <nav styleName='Megamenu'>
                <ul styleName='__list'>
                    {megamenuLinks.map(({ sets, header }, index) => (
                        <li styleName='__element' key={index}>
                            <span styleName='__elementHeader'>{header}</span>
                            <MegamenuElement megamenuLinks={sets}/>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Megamenu
