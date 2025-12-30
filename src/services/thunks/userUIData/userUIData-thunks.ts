import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IProduct, IFormOrderData } from "src/types";
import { mockedGetProductsApi, mockedDoOrder } from "../../../services/api";

export const getProducts = createAsyncThunk<IProduct[]>(
  "getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const products = await mockedGetProductsApi();
      return products;
    } catch (err) {
      return rejectWithValue("Ошибка на сервере, нет товаров.");
    }
  },
);

export const doOrder = createAsyncThunk<string, IFormOrderData>(
  "doOrder",
  async (data, { rejectWithValue }) => {
    try {
      const order = await mockedDoOrder(data);
      return order;
    } catch (err) {
      return rejectWithValue("Ошибка на сервере при создании заказа.");
    }
  },
);
