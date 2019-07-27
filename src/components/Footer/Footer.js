import React from 'react'
import CSSModules from 'react-css-modules'
import Column from '../Grid/Column'
import styles from './Footer.scss'
import Copyright from '../Copyright'
import FooterLinks from './FooterLinks'

@CSSModules(styles, {allowMultiple: true})
class Footer extends React.Component {
	render() {
		return (
			<footer styleName='Footer'>
				<Column xs='1'>
					<div styleName='__inner'>
						<Copyright/>
						<FooterLinks/>
					</div>
				</Column>
			</footer>
		)
	}
}

export default Footer
