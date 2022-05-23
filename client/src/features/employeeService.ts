import { EmployeeArrayModel, EmployeeModel, EmployeeModelData } from '../models/redux-models';
import axios from 'axios'

export default{
    async create(data:EmployeeModelData){
        const response = await axios.post('http://localhost:8000/api/employee/create', data)
        return response.data;
    },

    async fetchAll(){
        const response = await axios.get('http://localhost:8000/api/employees')
        const data:EmployeeModel[]=response.data.data
        return data;
    },

    async show(id:string){
        const response = await axios.get(`http://localhost:8000/api/employee/${id}`)
        return response.data.data;
    },

    async update(id:string,employeeData:EmployeeModelData){
        const response = await axios.put(`http://localhost:8000/api/employee/${id}`,employeeData)
        return response.data;
    },

    async remove(id:string){
        const response = await axios.delete(`http://localhost:8000/api/employee/${id}`)
        const data:EmployeeModel=response.data.data
        return data;
    },
}