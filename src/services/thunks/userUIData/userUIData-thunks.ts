import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IProduct } from 'src/types';
import { mockedGetProductsApi } from '../../../services/api';

export const getProducts = createAsyncThunk<IProduct[]>('getProducts', async ( _, { rejectWithValue }) => { 
    try {
        const products = await mockedGetProductsApi();
        return products;
    } catch (err) {
        return rejectWithValue('Ошибка на сервере, нет товаров.');
    }
  })