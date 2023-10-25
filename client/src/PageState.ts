/* 
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PageState {
    color: string;
    quote: string;
    author: string; 
}

const initialState: PageState = {
    color: '#ffffff',
    quote: 'defualt quote',
    author: 'default author'
}

export const PageSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        changeColor(state, action: PayloadAction<string>){
            state.color = action.payload
        },
        changeQuote(state, action: PayloadAction<string>){
            state.quote = action.payload
        },
        changeAuthor(state, action: PayloadAction<string>){
            state.author = action.payload
        }
    }
})

export const {changeColor, changeAuthor, changeQuote} = PageSlice.actions;
export default PageSlice.reducer;
*/