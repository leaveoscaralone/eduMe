import { configureStore } from '@reduxjs/toolkit';
import phoneReducers from './phoneSlice';

export default configureStore({
    reducer: {
        phone: phoneReducers,
    },
});