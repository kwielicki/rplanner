import React from 'react'
import CSSModules from 'react-css-modules'
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import ListOfLinks from '../../UI/ListWithLinks'
import styles from './FooterLinks.scss'

const messages = defineMessages({
    FooterLinksFaq: {
        id: 'FooterLinks_faq',
        defaultMessage: 'Faq'
    },
    FooterLinksTerms: {
        id: 'FooterLinks_terms',
        defaultMessage: 'Terms and conditions'
	},
	FooterLinksPolicy: {
        id: 'FooterLinks_policy',
        defaultMessage: 'Privacy Policy'
    }
})

@CSSModules(styles, {allowMultiple: true})
class FooterLinks extends React.Component {
	state = {}

	componentDidMount() {
		const { intl } = this.props
		this.setState({
			footerLinks: [
				{
					linkUrl: '/faq',
					linkTitle: intl.formatMessage(messages.FooterLinksFaq),
					linkLabel: intl.formatMessage(messages.FooterLinksFaq)
				}, {
					linkUrl: '/terms-and-conditions',
					linkTitle: intl.formatMessage(messages.FooterLinksTerms),
					linkLabel: intl.formatMessage(messages.FooterLinksTerms)
				}, {
					linkUrl: '/privacy-policy',
					linkTitle: intl.formatMessage(messages.FooterLinksPolicy),
					linkLabel: intl.formatMessage(messages.FooterLinksPolicy)
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

export default injectIntl(FooterLinks)

