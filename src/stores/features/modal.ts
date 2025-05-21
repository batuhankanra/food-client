import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalProps{
    modal:string
    id:string
}

const initialState:modalProps={
    modal:'',
    id:''
}

const modal=createSlice({
    name:'modal',
    initialState,
    reducers:{
        setModal:(state,action:PayloadAction<modalProps>)=>{
            state.modal=action.payload.modal
            state.id=action.payload.id
        },
        removeModal:(state)=>{
            state.modal=''
            state.id=''
        }
        
    }
})


export const {setModal,removeModal} = modal.actions
export default modal.reducer