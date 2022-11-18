import { EmployeeModel } from "../../models/models";
import { Action } from "../actions/employeeActions";

export interface EmployeeState {
    employees: EmployeeModel[];
    employee:EmployeeModel,
    isLoading:boolean,
    isSuccess:boolean,
    error:string,
  }
  
  const initialState:EmployeeState = {
    employees: [],
    employee:{
    "_id":"",
    "name": "",
    "gender": "",
    "salary": 0,
    "dateOfBirth":new Date(),
    },
    isLoading:false,
    isSuccess:false,
    error:""
  };
  
  
  export const employeeReducer = (
    state: EmployeeState = initialState,
    action: Action
  ) => {
    switch (action.type) {
      case "GET_EMPLOYEE_REQUEST": {
        return { ...state, isLoading: true};
      }
      case "GET_EMPLOYEE_SUCCESS":{
        return {...state,employee:action.payload,isLoading:false,isSuccess:true}
      }
      case "GET_EMPLOYEE_ERROR":{
        return {...state,isSuccess:false}
      }
      case "FETCH_EMPLOYEES_REQUEST": {
        return { ...state, isLoading: true};
      }
      case "FETCH_EMPLOYEES_SUCCESS":{
        return {...state,employees:action.payload,isLoading:false,isSuccess:true}
      }
      case "FETCH_EMPLOYEES_ERROR":{
        return {...state,isSuccess:false}
      }
      case "INSERT_EMPLOYEE_REQUEST": {
        return { ...state, isLoading: true};
      }
      case "INSERT_EMPLOYEE_SUCCESS":{
        return {...state,isLoading:false,isSuccess:true}
      }
      case "INSERT_EMPLOYEE_ERROR":{
        return {...state,isSuccess:false}
      }
      case "UPDATE_EMPLOYEE_REQUEST": {
        return { ...state, isLoading: true};
      }
      case "UPDATE_EMPLOYEE_SUCCESS":{
        return {...state,isLoading:false,isSuccess:true}
      }
      case "UPDATE_EMPLOYEE_ERROR":{
        return {...state,isSuccess:false}
      }
      case "DELETE_EMPLOYEE_REQUEST": {
        return { ...state, isLoading: true};
      }
      case "DELETE_EMPLOYEE_SUCCESS":{
        return {...state,isLoading:false,isSuccess:true}
      }
      case "DELETE_EMPLOYEE_ERROR":{
        return {...state,isSuccess:false}
      }
      default:
        return state;
    }
  };
  