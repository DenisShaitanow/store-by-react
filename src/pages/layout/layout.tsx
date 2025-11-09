import { useNavigate, useLocation } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import { HeaderUI } from '../../ui/header';
import styles from './layout.module.css';

function Layout() {

  const navigate = useNavigate();
  const location = useLocation();

  const isRegistrationPage = location.pathname === '/registration' || location.pathname === '/loginClient';

  const handleLogin = () => {
    navigate('/loginClient');
  }

  const handleRegister = () => {
    navigate('/registration');
  }



  return (
    <div className={styles.layout}>
      {!isRegistrationPage && <HeaderUI onLoginClick={handleLogin} onRegisterClick={handleRegister} isModal={false} isAuth={false} isNotification={false} theme={"light"} />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;