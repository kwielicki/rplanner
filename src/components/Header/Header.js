import React from 'react'
import { connect } from 'react-redux'
import Container from 'Components/Grid/Container'
import Column from 'Components/Grid/Column'
import BreadcrumbsWrapper from 'Components/BreadcrumbsWrapper'
import IconButton from 'Components/UI/IconButton'
import { hamburgerOpenAction } from 'Actions/hamburgerActions'
import { overlayShowAction } from 'Actions/overlayActions'
import './Header.scss'

const mapStateToProps = state => {
    return {
		isOpen: state.hamburger.isOpen,
		isOverlayActivated: state.overlay.isOverlayActivated
    }
}

class Header extends React.Component {

	sideBarOpen = () => {
		this.props.dispatch(hamburgerOpenAction(!this.props.isOpen))
		this.props.dispatch(overlayShowAction(!this.props.isOverlayActivated))
	}

	render() {
		const { isMobile } = this.props
		return (
			<header styleName='Header'>
				<Container>
					<Column xs='1'>
						<div styleName='__inner'>
							{isMobile && <IconButton handleClick={this.sideBarOpen} icon='bars'></IconButton> }
							<BreadcrumbsWrapper/>
						</div>
					</Column>
				</Container>
			</header>
		)
	}
}

export default connect(mapStateToProps)(Header)
