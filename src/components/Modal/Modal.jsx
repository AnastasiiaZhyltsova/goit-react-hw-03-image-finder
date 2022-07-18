import { Component } from 'react';
import { createPortal } from 'react-dom';

import style from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown)
  }

  hendleKeyDown = e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
  }
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
        this.props.onClose();
    }
  }

  render () {
  return createPortal(
    <div className={style.overlay} onClick={this.handleBackdropClick}>
      <div className={style.modal}>        
        <img src={this.props.bigImage} alt='' className={style.image} />
      </div>
    </div>,
    modalRoot,
  )   
}
}

export default Modal;