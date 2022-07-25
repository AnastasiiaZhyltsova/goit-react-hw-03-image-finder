import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import style from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { images, error, status } = this.props;
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <ul className={style.list}>
          {images.map(item => (
            <ImageGalleryItem key={item.id} item={item} />
          ))}
        </ul>
      );
    }
  }
}

export default ImageGallery;
