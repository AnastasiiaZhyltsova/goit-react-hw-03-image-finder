import { Component } from "react";
import style from './Searchbar.module.css'


class Searchbar extends Component{
  state = {
   seachQuery: '',
 }

  handleNameChange = (e) => {
    this.setState({ seachQuery: e.currentTarget.value.toLowerCase() });
  }
//  при сабмите формы вызываю метод из App и передаю ему значние state из этого класса 
  // значение this.state.seachQuery eпередается параметром в метод handleSearchbarSubmit
  handleSubmit = e => {    
    e.preventDefault();
    if (this.state.seachQuery.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.seachQuery);
    this.setState({ seachQuery : ""})    
  }

  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.button}>
            <span className={style.buttonLabel}>Search</span>
          </button>

          <input
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.seachQuery}
            onChange={this.handleNameChange}
          />
        </form>
</header>
    )
  }
}

export default Searchbar;