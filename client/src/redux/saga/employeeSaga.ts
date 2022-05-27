import { all, call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { EmployeeModel, EmployeeModelData } from '../../models/models';
import { fetchEmployeeSuccess, getEmployeeSuccess, insertEmployeeError, updateEmployeeError } from '../actions/employeeActions';
import { ACTION_TYPES } from '../actions/actionTypes';
import { get } from 'lodash'

const getEmployee=async(id:string)=>{
    const res = await axios.get(`http://localhost:8000/api/employee/${id}`)
    return res.data.data
}

function* getEmployeeSaga(action:any) {
    try {
        const id = get(action, 'id');
        const res: EmployeeModel = yield call(getEmployee,id);
        yield put(getEmployeeSuccess(
            res,
        ))
    } catch (error) {

    }
}

const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:8000/api/employees")
    return res.data.data
}

function* fetchEmployeeSaga() {
    try {
        const res: EmployeeModel[] = yield call(fetchEmployees);
        yield put(fetchEmployeeSuccess(
            res,
        ))
    } catch (error) {

    }
}

const insertEmployee = async (body: EmployeeModelData) => {
    const res = await axios.post("http://localhost:8000/api/employee/create", body)
    return res.data.data
}

function* insertEmployeeSaga(action: any) {
    try {
        const employeeM = get(action, 'args');
        yield call(insertEmployee, employeeM)
        const res: EmployeeModel[] = yield call(fetchEmployees);
        yield put(fetchEmployeeSuccess(
            res,
        ))
    } catch (error: any) {
        yield put(insertEmployeeError({ error }))
    }
}

const updateEmployee = async (body: EmployeeModelData, id: string) => {
    const res = await axios.put(`http://localhost:8000/api/employee/${id}`, body)
    return res.data.data
}

function* updateEmployeeSaga(action: any) {
    try {
        const employeeM = get(action, 'args');
        const id = get(action, 'id');
        yield call(updateEmployee, employeeM, id)
        const res: EmployeeModel[] = yield call(fetchEmployees);
        yield put(fetchEmployeeSuccess(
            res,
        ))
    } catch (error:any) {
        yield put(updateEmployeeError({error}))
    }
}

const deleteEmployee = async (id: string) => {
    const res = await axios.delete(`http://localhost:8000/api/employee/${id}`)
    return res.data.data
}

function* deleteEmployeeSaga(action: any) {
    try {
        const id = get(action, 'id');
        yield call(deleteEmployee, id)
        const res: EmployeeModel[] = yield call(fetchEmployees);
        yield put(fetchEmployeeSuccess(
            res,
        ))
    } catch (error) {

    }
}
function* employeeSaga() {
    yield all([
        takeLatest(ACTION_TYPES.GET_EMPLOYEE_REQUEST, getEmployeeSaga),
        takeLatest(ACTION_TYPES.FETCH_EMPLOYEES_REQUEST, fetchEmployeeSaga),
        takeLatest(ACTION_TYPES.INSERT_EMPLOYEE_REQUEST, insertEmployeeSaga),
        takeLatest(ACTION_TYPES.UPDATE_EMPLOYEE_REQUEST, updateEmployeeSaga),
        takeLatest(ACTION_TYPES.DELETE_EMPLOYEE_REQUEST, deleteEmployeeSaga)
    ])
}

export default employeeSaga;