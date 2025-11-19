import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { logoutUser } from '../../services/thunks/user';
import { selectIsAuth } from '../../services/selectors/user-selectors/user-selectors';
import { Outlet } from 'react-router-dom';
import { HeaderUI } from '../../ui/header';
import styles from './layout.module.css';
import { useEffect } from 'react';

import { selectUser } from '../../services/selectors/user-selectors/user-selectors';
import { getCookie } from '../../services/cookie';

function Layout() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const isRegistrationPage = location.pathname === '/registration' || location.pathname === '/loginClient';
  const accessToken = getCookie('accessToken');
  const isAuth: boolean = useAppSelector(selectIsAuth) || !!accessToken || false;

  const user = useAppSelector(selectUser);

  const handleLogin = () => {
    navigate('/loginClient');
  }

  const handleRegister = () => {
    navigate('/registration');
  }

  const handleClickLogout = () => {
    console.log('exit');
    dispatch(logoutUser());
  }



  return (
    <div className={styles.layout}>
      {!isRegistrationPage && <HeaderUI handleClickLogout={handleClickLogout} user={user!} onLoginClick={handleLogin} onRegisterClick={handleRegister} isModal={false} isAuth={isAuth} isNotification={false} theme={"light"} />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;