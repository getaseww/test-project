import React, { useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EmployeeState } from '../redux/reducers/employeeReducers';
import { deleteEmployeeRequest, fetchEmployeeRequest, fetchEmployeeSuccess } from '../redux/actions/employeeActions';


const Wrapper = styled.div`
display:flex;
padding:20px;
justify-content:center;
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid;
`
const TableRow = styled.tr`
`
const TableHead = styled.th`
border: 1px solid #ddd;
`
const TableData = styled.td`
border: 1px solid #ddd;
`
const ShowButton = styled.button`
margin:5px;
border-radius:5px;
border:none;
padding:10px;
background-color:#b6b8ba;
color:white;
font-size:17px;
&:hover{
    background-color:#b6b8ff;
}
`
const EditButton = styled.button`
margin:5px;
border-radius:5px;
border:none;
padding:10px;
background-color:#0b5fe6;
color:white;
font-size:17px;
&:hover{
    background-color:#0bafe6;
}
`
const DeleteButton = styled.button`
border-radius:5px;
margin:5px;
border:none;
padding:10px;
background-color:#c91a14;
color:white;
font-size:17px;
&:hover{
    background-color:#ec1a14;
}
`
export default function Employees() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        const args = {
            '_id': "ksdios",
            "name": "name",
            "gender": "male",
            "salary": 0,
            "dateOfBirth": new Date()
        }
        dispatch(fetchEmployeeRequest(args))
    }, [])
    const employees = useSelector<EmployeeState, EmployeeState["employees"]>(
        (state) => state.employees
    );

    const showEmployee = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        navigate(`/employee/${id}`)
    }

    const editEmployeeRecord = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        navigate(`/employee/edit/${id}`)
    }

    const deleteRecord = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
        e.preventDefault()
        dispatch(deleteEmployeeRequest(id))
    }
    return (
        <div>
            <Navbar />
            <Wrapper>
                <Table>
                    <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date of birth</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Salary</TableHead>
                        <TableHead>Show</TableHead>
                        <TableHead>Edit</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                    {employees ?
                        employees.map((employee, index) => (
                            <TableRow key={index}>
                                <TableData>{index + 1}</TableData>
                                <TableData>{employee.name}</TableData>
                                <TableData>{moment(employee.dateOfBirth).format('LL')}</TableData>
                                <TableData>{employee.gender}</TableData>
                                <TableData>{employee.salary}</TableData>
                                <TableData><ShowButton onClick={(e) => showEmployee(e, employee._id)}>Show</ShowButton></TableData>
                                <TableData><EditButton onClick={(e) => editEmployeeRecord(e, employee._id)}>Edit</EditButton></TableData>
                                <TableData><DeleteButton onClick={(e) => deleteRecord(e, employee._id)}>Delete</DeleteButton></TableData>
                            </TableRow>
                        ))
                        : <p>Loading...</p>
                    }
                </Table>
            </Wrapper>
        </div>
    )
}
