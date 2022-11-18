import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { EmployeeModelData } from '../models/models';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeRequest, updateEmployeeRequest } from '../redux/actions/employeeActions';
import { EmployeeState } from '../redux/reducers/employeeReducers';


const Wrapper = styled.div`
margin-top:20px;
display:flex;
justify-content:center;
align-items:center;
`
const Card = styled.div`
self-align:center;
width:70vw;
height:60vh;
padding:20px;
border-radius:10px;
border:1px solid black;
`
const Title = styled.h5`
text-align:center;
font-size:23px;
`
const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Label = styled.label`
width:50%;
padding-top:20px;
padding-bottom:4px;
`
const Input = styled.input`
width:50%;
padding:7px;
`
const Select = styled.select`
width:50%;
padding:7px;
background-color:white;
`
const Option = styled.option`
width:50%;
padding:7px;
background-color:white;
`
const Picker = styled(DatePicker)`
width:50%;
padding:7px;
margin-left:24.5%;
`
const Button = styled.button`
margin-top:30px;
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

export default function EditEmployeeData() {
    const location = useLocation();
    const id:string = location.pathname.split('/')[3];
    const [name, setName] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [salary, setSalary] = useState<number>(0)
    const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date())

    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getEmployeeRequest(id))  
    },[])
    const employee = useSelector<EmployeeState, EmployeeState["employee"]>(
        (state) => state.employee
    );
    useEffect(()=>{
        setName(employee.name)
        setGender(employee.gender)
        setSalary(employee.salary)
        setDateOfBirth(new Date(employee.dateOfBirth))
    },[employee])
    const navigate=useNavigate()
    const updateRecord = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data: EmployeeModelData = {
            name,
            gender,
            salary,
            dateOfBirth
        }
        dispatch(updateEmployeeRequest(data,id))
        navigate('/employees')
    }
    return (
        <div>
            <Navbar />
            {
                <Wrapper>
                    <Card>
                        <Title>Add Employee Data</Title>
                        <Form>
                            <Label>Name</Label>
                            <Input defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder='Employee Name' />
                            <Label>Salary</Label>
                            <Input defaultValue={salary} onChange={(e) => setSalary(parseInt(e.target.value))} placeholder='Employee Salary' />
                            <Label>Date of birth</Label>
                            <Picker selected={dateOfBirth} onChange={(date: Date) => setDateOfBirth(date)} />
                            <Label>Age</Label>
                            <Select defaultValue={gender} onChange={(e) => setGender(e.target.value)}>
                                <Option value='male'>Male</Option>
                                <Option value='female'>Female</Option>
                            </Select>
                            <Button onClick={updateRecord}>Update</Button>
                        </Form>
                    </Card>
                </Wrapper>
            }
        </div>
    )
}
