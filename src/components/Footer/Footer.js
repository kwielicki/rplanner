import React from 'react';
import CSSModules from 'react-css-modules';
import Column from '../Column/Column';
import styles from './Footer.scss'
import Copyright from '../Copyright/Copyright';

class Footer extends React.Component {
	render() {
		return (
			<footer styleName='Footer'>
				<Column xs='1'>
					<div styleName='__inner'>
						<Copyright/>
					</div>
				</Column>
			</footer>
		)
	}
}

export default CSSModules(Footer,styles)
