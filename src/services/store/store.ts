import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from '../slices/user/userSlice';
import { userUIDataReducer } from '../slices/userUIData';


// комбинирую слайсы в стор
export const rootReducer = combineReducers({

  user: userReducer,
  userUIData: userUIDataReducer

});

// создаю стор
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

// типизирую стор и диспатч
export type TRootState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;

export default store;