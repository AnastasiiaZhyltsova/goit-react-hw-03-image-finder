import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import Button from "components/Button/Button";

import style from './ImageGallery.module.css'

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    error: null, 
    status: 'idle',
  }

 async componentDidUpdate(prevProps, prevState) {
    const key = "27868120-ecbda89988110022223138572";
    const { seachQuery } = this.props;
    const { page } = this.state;
    const prevSeach = prevProps.seachQuery; 
    const nextSeach = this.props.seachQuery;
    const nextPage = this.state.page;
    const prevPage = prevState.page;

     if ( prevSeach !== nextSeach || prevPage !== nextPage) {
       this.setState({ status: "pending",});
       
     await fetch(`https://pixabay.com/api/?q=${seachQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
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

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  render() {
    const { images, status, error } = this.state;

    if (status === "pending") {
      return <Loader />;
    }
    if (status === "rejected") {
      return <h1>{error.message}</h1>;
    }

    if (status === "resolved") {
       return (     
         <div>
           <ul className ={style.list}>
            {images.map((item) => (<ImageGalleryItem key={item.id} item={item} />))}
           </ul>  
           <Button onClickButton={this.loadMore} />
        </div>
      )
    }
  }
}

export default ImageGallery;

