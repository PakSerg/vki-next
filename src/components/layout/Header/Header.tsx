import Menu from '../Menu/Menu';

import styles from './Header.module.scss';

const Header = (): React.ReactElement => (
  <header className={styles.Header}>
    <img src="https://ci.nsu.ru/local/templates/vki/images/logo.png" alt=""/>
    <div className={styles.title}>
      Веб разработка
    </div>
    <Menu />
  </header>
);

export default Header;
