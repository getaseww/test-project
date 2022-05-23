import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { show } from '../features/employeeSlice';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import moment from 'moment';
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
const Title2=styled.h6`
font-size:20px;
`
const Text=styled.p`
font-size:20px;
padding:25px 20px;
`
const Row=styled.div`
display:flex;
`
export default function SingleEmployee() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(show(id))
    },[])
    const employee = useAppSelector(state => state.employee.employee);

  return (
    <div>
        <Navbar/>
        <Wrapper>
            <Card>
                <Title>Employee Information</Title>
                <Row>
                <Title2>Name:</Title2><Text>{employee&&employee.name}</Text></Row>
                <Row>
                <Title2>Gender:</Title2><Text>{employee&&employee.gender}</Text></Row>
                <Row>
                <Title2>Salary:</Title2><Text>{employee&&employee.salary}</Text></Row>
                <Row>
                <Title2>Date of birth:</Title2><Text>{employee&&moment(employee.dateOfBirth).format('LLL')}</Text></Row>
            </Card>
        </Wrapper>
    </div>
  )
}
