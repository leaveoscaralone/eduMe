import { configureStore } from '@reduxjs/toolkit';
import phoneReducers from './phone';

export default configureStore({
    reducer: {
        phone: phoneReducers,
    },
});