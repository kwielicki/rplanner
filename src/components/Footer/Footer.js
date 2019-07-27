import React from 'react'
import CSSModules from 'react-css-modules'
import Column from '@components/Grid/Column'
import Copyright from '@components/Copyright'
import FooterLinks from '@components/Footer/FooterLinks'
import styles from './Footer.scss'

@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'log'})
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
