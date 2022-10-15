import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './features/basketSlice'
import RestaurantSlice from './RestaurantSlice'

export const store = configureStore({
    reducer: {
        basket: basketSlice,
        restaurant: RestaurantSlice,
    },
})