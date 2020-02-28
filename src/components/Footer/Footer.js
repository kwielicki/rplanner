import React from 'react'
import CSSModules from 'react-css-modules'
import Column from 'Components/Grid/Column'
import Copyright from 'Components/Copyright'
import FooterLinks from 'Components/Footer/FooterLinks'
import styles from './Footer.scss'
import Container from 'Components/Grid/Container'

@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'log'})
class Footer extends React.Component {
	render() {
		return (
			<footer styleName='Footer'>
				<Container>
					<Column xs='1'>
						<div styleName='__inner'>
							<Copyright/>
							<FooterLinks/>
						</div>
					</Column>
				</Container>
			</footer>
		)
	}
}

export default Footer
