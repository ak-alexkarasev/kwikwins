import cn from 'classnames';
import './App.css';
import styles from './scss/main.module.scss';
import { Input } from 'antd';

function App() {
  return (
    <div className={cn(styles.App,styles.Appnew)}>
      <header style={{borderBottom: "1px solid blue"}} className={styles.Appheaderrr}>
        <div className='AppForm'></div>
      </header>
      <button>Тест</button>
      <Input type="text" placeholder='Тест' className={styles.Newinput}></Input>
    </div>
  );
}

export default App;
