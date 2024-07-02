import {combineReducers} from '@reduxjs/toolkit'
import todoReducer from '../slices/todoSlice';

const rootReducer=combineReducers({
    todo:todoReducer
})

export default rootReducer;