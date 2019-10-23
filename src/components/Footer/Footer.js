import React from 'react'
import CSSModules from 'react-css-modules'
import Column from 'PATH_TO__COMPONENTS/Grid/Column'
import Copyright from 'PATH_TO__COMPONENTS/Copyright'
import FooterLinks from 'PATH_TO__COMPONENTS/Footer/FooterLinks'
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
