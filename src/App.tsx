import { Header } from './components/Header';
import { Container } from './components/Container';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Container />
    </div>
  );
}

export default App;