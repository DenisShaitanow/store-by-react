import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IProduct } from '../../types/index';
import { getProducts } from '../thunks/userUIData/userUIData-thunks';

interface IUserState {
    loadingProducts: boolean;
    products: IProduct[];
    favoriteItems: string[];
    notifications: {id: string, text: string}[];
    busket: string[];
    error: string;
}
  
export const initialState: IUserState = {
    loadingProducts: false,
    products: [],
    favoriteItems: [],
    notifications: [],
    busket: [],
    error: ''
};

const userUIDataSlice = createSlice({
    name: 'userUIData',
    initialState,
    reducers: {
        resetFavoriteItems: (state) => {
            state.favoriteItems = [];
        },
        resetNotifications: (state) => {
            state.notifications = [];
        },
        resetBusket: (state) => {
            state.busket = [];
        },
        addToBusket: (state, action: PayloadAction<string>) => {
            state.busket = [...state.busket, action.payload];
        },
        removeFromBusket: (state, action: PayloadAction<string>) => {
            state.busket = state.busket.filter(item => item !== action.payload)
        },
        removeFromFavoriteItems: (state, action: PayloadAction<string>) => {
            state.favoriteItems = state.favoriteItems.filter(item => item !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.loadingProducts = true;
        })
            .addCase(getProducts.fulfilled, (state, action: PayloadAction<IProduct []>) => {
                state.products = action.payload;
                state.loadingProducts = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.error = action.payload as string;
            })
    }
});

export const { 
    resetFavoriteItems,  
    resetNotifications,
    resetBusket,
    addToBusket,
    removeFromBusket,
    removeFromFavoriteItems
} = userUIDataSlice.actions;

export const userUIDataReducer = userUIDataSlice.reducer;