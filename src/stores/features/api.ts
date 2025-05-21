import { createAsyncThunk,createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import axios from "axios";

interface initalProps{
    status:'Fail' | 'Loading' | 'Success' | ''
    data:FoodProps[]
}
interface UpdateFoodArgs {
  id: string;
  formData: FormData;
}
export const CreateApi=createAsyncThunk<string, FormData>('food/createFood',async (formData)=>{
    try{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      return response.data
    }catch(err){
        console.log(err)
        return err
    }
})
export const UpdateApi=createAsyncThunk<string, UpdateFoodArgs >('food/createFood',async ({formData,id})=>{
    try{
        const response = await axios.put(`${import.meta.env.VITE_API_URL}update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      return response.data
    }catch(err){
        console.log(err)
        return err
    }
})
export const DeleteApi=createAsyncThunk<string,string >('food/deleteFood',async (id)=>{
    try{
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}delete/${id}`);

      return response.data
    }catch(err){
        console.log(err)
        return err
    }
})

export const GetItem=createAsyncThunk<FoodProps[]>('food/getitem',async ()=>{
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}`);

      return response.data
    }catch(err){
        console.log(err)
        return err
    }
})

const initialState:initalProps={
    status:'',
    data:[]
}

const apiSlice=createSlice({
    name:'apiSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(CreateApi.rejected,(state)=>{
            state.status='Fail'
        })
        builder.addCase(CreateApi.pending,(state)=>{
            state.status='Loading'
        })
        builder.addCase(CreateApi.fulfilled,(state)=>{
            state.status='Success'
        })
        builder.addCase(GetItem.rejected,(state)=>{
            state.status='Fail'
        })
        builder.addCase(GetItem.pending,(state)=>{
            state.status='Loading'
        })
        builder.addCase(GetItem.fulfilled,(state,action:PayloadAction<FoodProps[]>)=>{
            state.status='Success'
            state.data=action.payload
        })
        builder.addCase(DeleteApi.rejected,(state)=>{
            state.status='Fail'
        })
        builder.addCase(DeleteApi.pending,(state)=>{
            state.status='Loading'
        })
        builder.addCase(DeleteApi.fulfilled,(state)=>{
            state.status='Success'
        })
    }
})

export default apiSlice.reducer