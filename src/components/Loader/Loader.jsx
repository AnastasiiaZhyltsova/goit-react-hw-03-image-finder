import { Oval } from 'react-loader-spinner';
import style from './Loader.module.css'

const Loader = () => {
  return (
    <div className={style.loader}>
    <Oval
      ariaLabel="loading-indicator"
      height={100}
      width={100}
      strokeWidth={5}
      color= "#3f51b5"
      secondaryColor="white"
    />
    </div>
  )
}

export default Loader;