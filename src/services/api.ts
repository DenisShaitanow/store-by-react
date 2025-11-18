import { setCookie, getCookie } from './cookie';


import { type IProduct, type RegistrationData } from '../types';
import { products } from '../constants/constants';

/*
const URL = process.env.BURGER_API_URL;
*/

export const mockedGetProductsApi = async (): Promise<IProduct[]> => {
  return new Promise((resolve, reject) => {
    if (products) {
      setTimeout(() => {
        resolve(products);
      }, 1500);
    } else {
      reject(new Error('Нет массива с товарами')); 
    }
  });
}

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

type TServerResponse<T> = {
  success: boolean;
} & T;

type TRefreshResponse = TServerResponse<{
  refreshToken: string;
  accessToken: string;
}>;

export const refreshToken = (): Promise<TRefreshResponse> =>
  fetch(`${URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  })
    .then((res) => checkResponse<TRefreshResponse>(res))
    .then((refreshData) => {
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem('refreshToken', refreshData.refreshToken);

      // Сохраняем только сам токен, без "Bearer ", отсекаем его за ненадобностью.
      const accessToken = refreshData.accessToken.startsWith('Bearer ')
        ? refreshData.accessToken.slice(7)
        : refreshData.accessToken;
      setCookie('accessToken', accessToken);
      return refreshData;
    });

export const fetchWithRefresh = async <T>(
  url: RequestInfo,
  options: RequestInit
) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse<T>(res);
  } catch (err) {
    if ((err as { message: string }).message === 'jwt expired') {
      const refreshData = await refreshToken();
      if (options.headers) {
        (options.headers as { [key: string]: string }).authorization =
          `Bearer ${getCookie('accessToken') || ''}`;
      }
      const res = await fetch(url, options);
      return await checkResponse<T>(res);
    } else {
      return Promise.reject(err);
    }
  }
};

// Фиктивные токены
const fakeAccessToken = 'fake_access_token';
const fakeRefreshToken = 'fake_refresh_token';


export function mockedRegisterUserApi(data: RegistrationData): Promise<{
  success: boolean,
  refreshToken: string,
  accessToken: string,
  user: RegistrationData
}> {

  const fakeRegistrationData = {
    email: data.email,
    password: data.password,
    name: data.name,
    surname: data.surname,
    avatar: data.avatar,
    gender: data.gender,
    location: data.location,
    birthdayDate: data.birthdayDate
  }
  // Ответ регистрации
  const mockSuccessResponse = {
    success: true,
    refreshToken: fakeRefreshToken,
    accessToken: `Bearer ${fakeAccessToken}`,
    user: fakeRegistrationData,
  };

  return new Promise((resolve) => {
    // Здесь можем добавить проверку данных или любые условия
    resolve(mockSuccessResponse); // Возвращаем заготовленную структуру
  });
}

type TAuthResponse = TServerResponse<{
  refreshToken: string;
  accessToken: string;
  user: RegistrationData;
}>;


/*
export const registerUserApi = (data: RegistrationData) => {
  fetch(`${URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then((res) => checkResponse<TAuthResponse>(res))
    .then((data) => {
      if (data?.success) {
        const accessToken = data.accessToken.startsWith('Bearer ')
          ? data.accessToken.slice(7)
          : data.accessToken;
        setCookie('accessToken', accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return data;
      }
      return Promise.reject(data);
})}
*/


export function mockedLogoutApi(): Promise<{ success: boolean }> {
  return new Promise(resolve => {
    resolve({ success: true });
  });
}

/*
export const logoutApi = () =>
      fetch(`${URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          token: localStorage.getItem('refreshToken')
        })
}).then((res) => checkResponse<TServerResponse<{}>>(res));
*/

export const mockedGetUserApi = async(): Promise<RegistrationData> => {
  const storedData = localStorage.getItem('regData'); // Извлекаем данные единожды
  if (!storedData)throw new Error('Пользователь не найден');

  const parsedData = JSON.parse(storedData); // Парсим строку в объект
  return parsedData; // Возвращаем распарсенный объект
};



export const mockedLoginUserApi = async (data: { email: string; password: string }): Promise<TAuthResponse> => {
  const storedData = localStorage.getItem('regData'); // Извлекаем данные единожды
  if (!storedData) throw new Error('Пользователь не найден'); // Если данных нет, генерируем ошибку

  const parsedData = JSON.parse(storedData) as RegistrationData;

  // Проверяем совпадение введённых данных с сохранёнными
  if (parsedData.email !== data.email || parsedData.password !== data.password) {
    throw new Error('Неправильные учетные данные'); // Генерируем ошибку при несовпадении
  }
  const mockSuccessResponse = {
    success: true,
    refreshToken: fakeRefreshToken,
    accessToken: `Bearer ${fakeAccessToken}`,
    user: parsedData,
  };

  return mockSuccessResponse; // Возвращаем объект пользователя при удачном входе
};


type TUserResponse = TServerResponse<{ user: RegistrationData }>;

export const mockUpdateUserApi = async (user: RegistrationData): Promise<TUserResponse> => {
  return {
    success: true,
    user: user
  }
}


/*
export const updateUserApi = (user: RegistrationData) =>
  fetchWithRefresh<TUserResponse>(`${URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${getCookie('accessToken') || ''}`
    } as HeadersInit,
    body: JSON.stringify(user)
});*/


/*
export type TLoginData = {
  email: string;
  password: string;
};

export const loginUserApi = (data: TLoginData) =>
  fetch(`${URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then((res) => checkResponse<TAuthResponse>(res))
    .then((data) => {
      if (data?.success) {
        const accessToken = data.accessToken.startsWith('Bearer ')
          ? data.accessToken.slice(7)
          : data.accessToken;
        setCookie('accessToken', accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        return data;
      }
      return Promise.reject(data);
    });





export const updateUserApi = (user: Partial<TRegisterData>) =>
  fetchWithRefresh<TUserResponse>(`${URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${getCookie('accessToken') || ''}`
    } as HeadersInit,
    body: JSON.stringify(user)
});
*/