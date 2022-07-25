import { Component } from 'react';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
    error: null,
    status: 'idle',
    images: [],
    page: 1,
    total: null,
    response: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const key = '27868120-ecbda89988110022223138572';
    const { searchQuery, page } = this.state;
    const prevSearch = prevState.searchQuery;
    const prevPage = prevState.page;

    if (prevSearch !== searchQuery || prevPage !== page) {
      console.log('делаем фетч');
      this.setState({
        response: true,
      });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(res => {
            console.log(res);
            if (!res.total) {
              return Promise.reject(new Error(`Нет такого ${searchQuery}`));
            }
            this.setState(prevState => ({
              total: res.hits.length,
              status: 'resolved',
              images: [...prevState.images, ...res.hits],
              response: false,
            }));
          })
          .catch(error => {
            this.setState({ error, status: 'rejected' });
          });
      }, 1000);
    }
  }
  handleSearchbarSubmit = searchQuery => {
    if (this.state.searchQuery !== searchQuery) {
      this.setState({
        searchQuery,
        status: 'pending',
        page: 1,
        images: [],
      });
    }
  };

  loadMore = () => {
    this.setState(prevProps => ({
      page: prevProps.page + 1,
    }));
  };

  render() {
    const { status, error, total, images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery status={status} error={error} images={images} />
        {this.state.response && <Loader />}
        {status === 'resolved' && total >= 12 && (
          <Button onClickButton={this.loadMore} />
        )}
      </div>
    );
  }
}

export default App;
