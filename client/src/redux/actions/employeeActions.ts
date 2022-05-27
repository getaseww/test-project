import { EmployeeModel, EmployeeModelData } from "../../models/models";
import { ACTION_TYPES } from "./actionTypes";

interface LoadingState {
    isLoading: boolean,
}

interface CommonErrorPayload {
    error?: {
        message: string,
        type: string,
    },
}

interface GetEmployeeRequest {
    type: ACTION_TYPES.GET_EMPLOYEE_REQUEST,
    id: string,
}
interface GetEmployeeSuccess {
    type: ACTION_TYPES.GET_EMPLOYEE_SUCCESS,
    payload: EmployeeModel,
}

interface GetEmployeeError {
    type: ACTION_TYPES.GET_EMPLOYEE_ERROR,
    payload: CommonErrorPayload,
}


interface FetchEmployeesRequest {
    type: ACTION_TYPES.FETCH_EMPLOYEES_REQUEST,
    args: EmployeeModel,
}
interface FetchEmployeesSuccess {
    type: ACTION_TYPES.FETCH_EMPLOYEES_SUCCESS,
    payload: EmployeeModel[],
}

interface FetchEmployeesError {
    type: ACTION_TYPES.FETCH_EMPLOYEES_ERROR,
    payload: CommonErrorPayload,
}

interface InsertEmployeeRequest {
    type: typeof ACTION_TYPES.INSERT_EMPLOYEE_REQUEST;
    args: EmployeeModelData,
}

interface InsertEmployeeSuccess {
    type: typeof ACTION_TYPES.INSERT_EMPLOYEE_SUCCESS,
};

interface InsertEmployeeError {
    type: typeof ACTION_TYPES.INSERT_EMPLOYEE_ERROR;
    payload: CommonErrorPayload,
};

interface UpdateEmployeeRequest {
    type: typeof ACTION_TYPES.UPDATE_EMPLOYEE_REQUEST;
    args: EmployeeModelData,
    id: string,
};

interface UpdateEmployeeSuccess {
    type: typeof ACTION_TYPES.UPDATE_EMPLOYEE_SUCCESS,
};

interface UpdateEmployeeError {
    type: typeof ACTION_TYPES.UPDATE_EMPLOYEE_ERROR;
    payload: CommonErrorPayload,
};

interface DeleteEmployeeRequest {
    type: typeof ACTION_TYPES.DELETE_EMPLOYEE_REQUEST;
    id: string,
};

interface DeleteEmployeeSuccess {
    type: typeof ACTION_TYPES.DELETE_EMPLOYEE_SUCCESS,
};

interface DeleteEmployeeError {
    type: typeof ACTION_TYPES.DELETE_EMPLOYEE_ERROR;
    payload: CommonErrorPayload,
};

export const getEmployeeRequest = (id: string): GetEmployeeRequest => ({
    type: ACTION_TYPES.GET_EMPLOYEE_REQUEST,
    id,
});

export const getEmployeeSuccess = (payload: EmployeeModel): GetEmployeeSuccess => ({
    type: ACTION_TYPES.GET_EMPLOYEE_SUCCESS,
    payload,
});

export const getEmployeeError = (payload: CommonErrorPayload): GetEmployeeError => ({
    type: ACTION_TYPES.GET_EMPLOYEE_ERROR,
    payload,
});

export const fetchEmployeeRequest = (args: EmployeeModel): FetchEmployeesRequest => ({
    type: ACTION_TYPES.FETCH_EMPLOYEES_REQUEST,
    args,
});

export const fetchEmployeeSuccess = (payload: EmployeeModel[]): FetchEmployeesSuccess => ({
    type: ACTION_TYPES.FETCH_EMPLOYEES_SUCCESS,
    payload,
});

export const fetchEmployeeError = (payload: CommonErrorPayload): FetchEmployeesError => ({
    type: ACTION_TYPES.FETCH_EMPLOYEES_ERROR,
    payload,
});
export const insertEmployeeRequest = (args: EmployeeModelData): InsertEmployeeRequest => ({
    type: ACTION_TYPES.INSERT_EMPLOYEE_REQUEST,
    args,
});
export const insertEmployeeSuccess = (): InsertEmployeeSuccess => ({
    type: ACTION_TYPES.INSERT_EMPLOYEE_SUCCESS,
});
export const insertEmployeeError = (payload: CommonErrorPayload): InsertEmployeeError => ({
    type: ACTION_TYPES.INSERT_EMPLOYEE_ERROR,
    payload,
});

export const updateEmployeeRequest = (args: EmployeeModelData, id: string): UpdateEmployeeRequest => ({
    type: ACTION_TYPES.UPDATE_EMPLOYEE_REQUEST,
    args,
    id,
});
export const updateEmployeeSuccess = (): UpdateEmployeeSuccess => ({
    type: ACTION_TYPES.UPDATE_EMPLOYEE_SUCCESS,
});
export const updateEmployeeError = (payload: CommonErrorPayload): UpdateEmployeeError => ({
    type: ACTION_TYPES.UPDATE_EMPLOYEE_ERROR,
    payload,
});

export const deleteEmployeeRequest = (id: string): DeleteEmployeeRequest => ({
    type: ACTION_TYPES.DELETE_EMPLOYEE_REQUEST,
    id,
});
export const deleteEmployeeSuccess = (): DeleteEmployeeSuccess => ({
    type: ACTION_TYPES.DELETE_EMPLOYEE_SUCCESS,
});
export const deleteEmployeeError = (payload: CommonErrorPayload): DeleteEmployeeError => ({
    type: ACTION_TYPES.DELETE_EMPLOYEE_ERROR,
    payload,
});
export type Action = GetEmployeeRequest|GetEmployeeSuccess|GetEmployeeError|FetchEmployeesRequest | FetchEmployeesSuccess | FetchEmployeesError | InsertEmployeeError | InsertEmployeeRequest | InsertEmployeeSuccess | UpdateEmployeeError | UpdateEmployeeRequest | UpdateEmployeeSuccess | DeleteEmployeeError | DeleteEmployeeRequest | DeleteEmployeeSuccess