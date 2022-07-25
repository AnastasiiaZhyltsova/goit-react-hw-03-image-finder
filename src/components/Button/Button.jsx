import { Component } from 'react';
import style from './Button.module.css'
class Button extends Component {

  render() {
     return (
       <div className={style.buttonBox}>
          <button className={style.button} onClick={this.props.onClickButton}>
            Load more
          </button>
      </div>
  )
  }
 
}

export default Button;