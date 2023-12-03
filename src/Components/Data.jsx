import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    datas : ''
}


const Data = createSlice({
    name : 'datastore',
    initialState,
    reducers : {
        setdatas : (state,actions)=>{
            state.datas = actions.payload
        }
    }
    
})

export const {setdatas} = Data.actions

export default Data.reducer
