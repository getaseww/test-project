import { EmployeeModel, EmployeeArrayModel, EmployeeModelData } from "../models/redux-models";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import employeeService from "./employeeService";

const initialEmployeeState: EmployeeArrayModel = {
  all_employees: [],
  employee:{
    "_id":"",
    "name":"",
    "gender":"",
    "salary":0.0,
    "dateOfBirth":new Date()
  },
  status:"pending"
}

export const create = createAsyncThunk(
  'employee/create',
  async (data: EmployeeModelData, thunkAPI) => {
    try {
      return await employeeService.create(data)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const fetchAll = createAsyncThunk(
  'employee/fetchAll',
  async () => {
    try {
      const res:EmployeeModel[]= await employeeService.fetchAll()
      return res
    } catch (error: any) {
      return []
    }
  }
)

export const show = createAsyncThunk(
  'employee/show',
  async (id:string,thunkAPI) => {
    try {
      const res:EmployeeModel= await employeeService.show(id)
      return res
    } catch (error: any) {
      const status ="failed"
      return thunkAPI.rejectWithValue(status)
    }
  }
)

export const remove = createAsyncThunk(
  'employee/remove',
  async (id:string,thunkAPI) => {
    try {
      return await employeeService.remove(id)
    } catch (error: any) {
      const status ="failed"
      return thunkAPI.rejectWithValue(status)
    }
  }
)

export const update = createAsyncThunk(
  'employee/upate',
  async ({id,data}:{id:string,data:EmployeeModelData}) => {
    try {
      const res= await employeeService.update(id,data)
      return res
    } catch (error: any) {
      return []
    }
  }
)

const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialEmployeeState,
  reducers: {
    create(state, action: PayloadAction<EmployeeModelData>) {
      state.status="success";
    },
  },


  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.all_employees = [];
        state.status="pending"
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.all_employees = action.payload;
        state.status="sucess"
      })
      .addCase(fetchAll.rejected, (state) => {
        state.all_employees = [];
        state.status="rejected"
      })
      .addCase(show.pending, (state) => {
        state.employee={
          "_id":"",
          "name":"",
          "gender":"",
          "salary":0,
          "dateOfBirth":new Date()
        }
        state.status="pending"
      })
      .addCase(show.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.status="sucess"
      })
      .addCase(show.rejected, (state) => {
        // state.employee = [];
        state.status="rejected"
      })
      .addCase(update.pending, (state) => {
        // state.all_employees = [];
        state.status="pending"
      })
      .addCase(update.fulfilled, (state, action) => {
        state.status="sucess"
      })
      .addCase(update.rejected, (state) => {
        // state.employee = [];
        state.status="rejected"
      })
      .addCase(remove.pending, (state) => {
        // state.all_employees = [];
        state.status="pending"
      })
      .addCase(remove.fulfilled, (state, action) => {
        state.status="sucess"
      })
      .addCase(remove.rejected, (state) => {
        // state.employee = [];
        state.status="rejected"
      })
  },
})


export default employeeSlice;