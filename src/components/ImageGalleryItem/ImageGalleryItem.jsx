import { Component } from "react";

import style from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
  render() {
    return (
       <li className={style.item}>
          <img src={this.props.item.webformatURL} alt="" className={style.image} />
       </li>
    )
  
  }
}

export default ImageGalleryItem;