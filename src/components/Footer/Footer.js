import React from 'react'
import CSSModules from 'react-css-modules'
import Column from '../Column/Column'
import styles from './Footer.scss'
import Copyright from '../Copyright'
import FullScreenView from '../FullScreenView'

@CSSModules(styles, {allowMultiple: true})
class Footer extends React.Component {
	render() {
		return (
			<footer styleName='Footer'>
				<Column xs='1'>
					<div styleName='__inner'>
						<Copyright/>
						<FullScreenView/>
					</div>
				</Column>
			</footer>
		)
	}
}

export default Footer
