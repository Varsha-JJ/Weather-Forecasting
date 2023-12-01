import createSlice  from '@reduxjs/toolkit';

const initialstate = {
    datas : ''
}


const Data = createSlice({
    name : 'datastore',
    initialstate,
    reducers : {
        setdata : (state,action)=>{
            state.datas = action.payload
        }
    }
    
})

export const {setdata} = Data.actions

export default Data.reducer
