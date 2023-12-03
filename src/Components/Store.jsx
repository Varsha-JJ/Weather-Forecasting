import { configureStore } from "@reduxjs/toolkit";
import dataslice from '../Components/Data';


const Store = configureStore({
    reducer : {
        datastore :  dataslice
    }
})

export default Store
