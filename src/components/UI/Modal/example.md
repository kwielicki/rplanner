# Modal parent

import Modal from 'Components/UI/Modal/Modal'

# Inside parent class

state = {
    modalOpen: false,
}

handleOpenModal = () => {
        this.setState({modalOpen: true})
    }
handleCloseModal = () => {
    this.setState({modalOpen: false})
}
handleConfirmModal = () => {
    alert('handleConfirmModal');
}

# Modal triggerer
<Rbutton handleClick={this.handleOpenModal}>Open modal</Rbutton>

# Modal renderer
{modalOpen && <Modal isOpen={modalOpen}
                     closeStyle='tertiary'
                     headerTitle='Header'
                     headerDescription='Description'
                     confirmStyle='tertiary'
                     confirmLabel='Confirm'
                     onClose={this.handleCloseModal} onConfirm={this.handleConfirmModal}>Modal content</Modal>}