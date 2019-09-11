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
                    header: 'General',
                    sets: [
                        { linkUrl: '/', linkTitle: 'Dashboard' }
                    ]
                },{
                    header: 'Actions',
                    sets: [
                        { linkUrl: '/manage-guest-list', linkTitle: 'Manage guest list' },
                        { linkUrl: '/adding-guest', linkTitle: 'Add a new guest' },
                        { linkUrl: '/statistic', linkTitle: 'Statistic' },
                        { linkUrl: '/wedding-organizer', linkTitle: 'Wedding organizer' },
                        { linkUrl: '/notebook', linkTitle: 'Notebook' },
                        { linkUrl: '/expenses', linkTitle: 'Expenses' }
                    ]
                },{
                    header: 'Help & FAQ',
                    sets: [
                        { linkUrl: '/documentation', linkTitle: 'Documentation' }
                    ]
                },{
                    header: 'Account',
                    sets: [
                        { linkUrl: '/user-profile', linkTitle: 'User profile' },
                    ]
                },{
                    header: 'Additional functionalities',
                    sets: [
                        { linkUrl: '/news', linkTitle: 'News' }
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
