import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import style from './ImageGallery.module.css'

class ImageGallery extends Component {
  state = {
    images: [],
    // loading: false,
    error: null, 
    status: 'idle',
  }

   async componentDidUpdate(prevProps) {
     if (prevProps.seachQuery !== this.props.seachQuery) {
       this.setState({ status: "pending" });
       
        await fetch(`https://pixabay.com/api/?q=${this.props.seachQuery}&page=1&key=27868120-ecbda89988110022223138572&image_type=photo&orientation=horizontal&per_page=12`)
          .then(response => {
              if (response.ok) {
             return response.json()
            }
            return Promise.reject(new Error('error '))
          })           
          .then(data => this.setState(({ images }) => ({ images: [...data.hits], status: "resolved"})))
          .catch(error => this.setState({ error, status : "rejected"}))
       
    }
  } 

  render() {
    const { images, status, error } = this.state;

    if (status === "pending") {
     return <p>Loading...</p>
    }
    if (status === "rejected") {
      return <h1>{error.message}</h1>
    }

    if (status === "resolved") {
       return (     
        <ul className ={style.list}>
          {images.map((item) => (          
            <ImageGalleryItem key={item.id} item={item} />
          ))}
        </ul>    
      )
    }
  }
}

export default ImageGallery;

