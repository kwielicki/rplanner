import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Megamenu.scss'
import MegamenuElement from './MegamenuElement'

@CSSModules(styles, {allowMultiple: true})
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
                        { linkUrl: '/', linkTitle: 'Dashboard', linkIcon: 'home' }
                    ]
                },{
                    header: 'Content',
                    sets: [
                        { linkUrl: '/manage-guest-list', linkTitle: 'Manage guest list', linkIcon: 'users' },
                        { linkUrl: '/adding-guest', linkTitle: 'Add a new guest', linkIcon: 'user-plus' },
                        { linkUrl: '/statistic', linkTitle: 'Statistic', linkIcon: 'chart-bar' },
                        { linkUrl: '/wedding-organizer', linkTitle: 'Wedding organizer', linkIcon: 'address-card' },
                        { linkUrl: '/notebook', linkTitle: 'Notebook', linkIcon: 'clipboard' },
                        { linkUrl: '/expenses', linkTitle: 'Expenses', linkIcon: 'funnel-dollar' }
                    ]
                },{
                    header: 'Help & FAQ',
                    sets: [
                        { linkUrl: '/documentation', linkTitle: 'Documentation', linkIcon: 'book' }
                    ]
                },{
                    header: 'Account',
                    sets: [
                        { linkUrl: '/user-profile', linkTitle: 'User profile', linkIcon: 'users-cog' },
                    ]
                },{
                    header: 'Additional functionalities',
                    sets: [
                        { linkUrl: '/news', linkTitle: 'News', linkIcon: 'images' }
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
                    {megamenuLinks.map(({ sets, header } = route, index) => (
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
