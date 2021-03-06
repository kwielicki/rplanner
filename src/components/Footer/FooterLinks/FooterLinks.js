import React from 'react'
import ListOfLinks from 'Components/UI/ListWithLinks'
import './FooterLinks.scss'

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
			<div styleName='FooterLinks'>
				<ListOfLinks links={this.state.footerLinks}/>	
			</div>
		)
	}
}

export default FooterLinks

