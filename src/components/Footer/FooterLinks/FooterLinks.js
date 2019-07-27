import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './FooterLinks.scss'

@CSSModules(styles, {allowMultiple: true})
class FooterLinks extends React.Component {
	render() {
		return (
			<ul styleName='FooterLinks'>
				FooterLinks
			</ul>
		)
	}
}

export default FooterLinks
