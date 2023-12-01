import { configureStore } from "@reduxjs/toolkit";
import dataslice from '../Components/Data';


const Store = configureStore({
    reducer : {
        dataslice : values
    }
})
export default Store
