import React from 'react'
import CSSModules from 'react-css-modules'
import ListOfLinks from '@components/UI/ListWithLinks'
import styles from './FooterLinks.scss'

@CSSModules(styles, {allowMultiple: true})
class FooterLinks extends React.Component {

	state = {}

	componentDidMount() {
		this.setState({
			footerLinks: [
				{
					linkUrl: '/faq',
					linkTitle: 'Faq',
					linkLabel: 'Faq'
				}, {
					linkUrl: '/terms-and-conditions',
					linkTitle: 'Terms and conditions',
					linkLabel: 'Terms and conditions',
				}, {
					linkUrl: '/privacy-policy',
					linkTitle: 'Privacy Policy',
					linkLabel: 'Privacy Policy'
				}
			]
		})
	}

	render() {
		return (
			<ul styleName='FooterLinks'>
				<ListOfLinks links={this.state.footerLinks}/>	
			</ul>
		)
	}
}

export default FooterLinks

