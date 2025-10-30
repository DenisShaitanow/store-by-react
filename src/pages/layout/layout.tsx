import { Outlet } from 'react-router-dom';
import { HeaderUI } from '../../ui/header';
import styles from './layout.module.css';

function Layout() {
  return (
    <div className={styles.layout}>
      <HeaderUI isModal={false} isAuth={false} isNotification={false} theme={"light"} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;