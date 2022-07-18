import { Component } from "react";
import Modal from '../Modal/Modal'
import style from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
    state = {
    showModal: false,
  }
  
    toggleModal = () => {
    this.setState(({showModal}) =>({
      showModal: !showModal
    }))
  }
  render() {
    const { showModal } = this.state;
    const { item } = this.props;
    return (
       <li className={style.item}>
         <img src={item.webformatURL} alt="" className={style.image} onClick={this.toggleModal} />
        {showModal && <Modal onClose={this.toggleModal} bigImage={item.largeImageURL} />}
      </li>
      
    )  
  }
}

export default ImageGalleryItem;