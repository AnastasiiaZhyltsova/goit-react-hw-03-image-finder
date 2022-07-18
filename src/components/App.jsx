import { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import  ImageGallery from './ImageGallery/ImageGallery'

export default class App extends Component {
  state = {
   seachQuery: '',
 }

  handleSearchbarSubmit = (seachQuery) => {
    this.setState({seachQuery})
  }

  render() {
    return (
    <div>
      <Searchbar onSubmit={this.handleSearchbarSubmit} />
      <ImageGallery seachQuery={this.state.seachQuery} />       
    </div>     
    )
  };
};
