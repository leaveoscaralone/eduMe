import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../ApiService';

export const fetchPhoneWords = createAsyncThunk(  
    'phoneWords/fetchPhoneWords',
    async (number, thunkAPI) => {
        const phoneWords = await Api.getPhoneWords(number)
        console.log(phoneWords);
        return phoneWords
    }
)

export const phoneSlice = createSlice({
    name: 'phone',
    initialState: {
        numberInput: '',
        status: null,
        result: [],
    },
    reducers: {
        setInput: (state, action) => {
            state.numberInput += action.payload;
        },
        reset: (state) => {
            state.numberInput = '';
            state.result = [];
        }
    },
    extraReducers: {
        [fetchPhoneWords.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPhoneWords.fulfilled]: (state, action) => {
            state.result = action.payload;
            state.status = 'success'
        },
        [fetchPhoneWords.rejected]: (state, action) => {
            state.status = 'failed'
        }
    },
})

export const result = state => state.phone.result;

export const numberInput = state => state.phone.numberInput;

export const { setInput, reset } = phoneSlice.actions

export default phoneSlice.reducer;