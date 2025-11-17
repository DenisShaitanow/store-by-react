import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../services/hooks';
import { selectIsAuth } from '../../services/selectors/user-selectors/user-selectors';
import { Outlet } from 'react-router-dom';
import { HeaderUI } from '../../ui/header';
import styles from './layout.module.css';
import { useEffect } from 'react';

import { selectUser } from '../../services/selectors/user-selectors/user-selectors';

function Layout() {

  const navigate = useNavigate();
  const location = useLocation();

  const isRegistrationPage = location.pathname === '/registration' || location.pathname === '/loginClient';
  const isAuth: boolean = useAppSelector(selectIsAuth) || false;

  const user = useAppSelector(selectUser);

  const handleLogin = () => {
    navigate('/loginClient');
  }

  const handleRegister = () => {
    navigate('/registration');
  }



  return (
    <div className={styles.layout}>
      {!isRegistrationPage && <HeaderUI user={user} onLoginClick={handleLogin} onRegisterClick={handleRegister} isModal={false} isAuth={isAuth} isNotification={false} theme={"light"} />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;