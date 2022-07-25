import { Component } from "react";
import {FcSearch } from 'react-icons/fc';
import style from './Searchbar.module.css'


class Searchbar extends Component{
  state = {
   searchQuery: '',
 }

  handleNameChange = (e) => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  }
//  при сабмите формы вызываю метод из App и передаю ему значние state из этого класса 
  // значение this.state.searchQuery eпередается параметром в метод handleSearchbarSubmit
  handleSubmit = e => {    
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery : ""})    
  }

  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.button}>
            <span className={style.buttonLabel}>
              <FcSearch className={style.svg}/>
            </span>
          </button>

          <input
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
          />
        </form>
</header>
    )
  }
}

export default Searchbar;

