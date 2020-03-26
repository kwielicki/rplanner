import React from 'react'
import Column from 'Components/Grid/Column'
import Copyright from 'Components/Copyright'
import FooterLinks from 'Components/Footer/FooterLinks'
import './Footer.scss'
import Container from 'Components/Grid/Container'

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
