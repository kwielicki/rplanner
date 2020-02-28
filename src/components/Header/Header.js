import React from 'react'
import CSSModules from 'react-css-modules'
import Container from 'Components/Grid/Container'
import Column from 'Components/Grid/Column'
import BreadcrumbsWrapper from 'Components/BreadcrumbsWrapper'
import styles from './Header.scss'

@CSSModules(styles, {allowMultiple: true})
class Header extends React.Component {
	render() {
		return (
			<header styleName='Header'>
				<Container>
					<Column xs='1'>
						<div styleName='__inner'>
							<BreadcrumbsWrapper/>
						</div>
					</Column>
				</Container>
			</header>
		)
	}
}

export default Header
