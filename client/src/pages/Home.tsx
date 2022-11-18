import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
display:flex;
align-items: center;
justify-content:center;
`
const Card = styled.div`
margin:10vh 0;
background-color:#ffffff;
border-radius:20px;
border: 1px solid #010101;
height:70vh;
width:90vw;
@media(max-width:600px){
    height:100vh;
}
`
const Title=styled.h3`
text-align:center;
padding:10px 0;
font-size:24px;
`
const UList=styled.ul`
padding:5vh 10vw;
`
const List=styled.li`
list-style:none;
font-size:20px;
padding-top:10px;
`
const Icon=styled(DoneIcon)`
color:#3b871b;
padding-right:10px;
`
const Row=styled.div`
display:flex;
margin:10vh;
justify-content:space-between;
@media(max-width:600px){
    flex-direction:column;
}
`
const Button=styled.button`
margin-left:20px;
margin-top:10px;
border-radius:10px;
border:none;
padding:15px 20px;
background-color:#3b871b;
color:white;
font-size:20px;
&:hover{
    background-color:#3bab1b;
}
`
export default function Home() {
    return (
        <div >
            <Navbar />
            <Wrapper>
                <Card>
                    <Title>Welcome to Employee data managment system</Title>
                    <UList>
                        <List><Icon/> Create Employee data record.</List>
                        <List><Icon/>Display Employee data record</List>
                        <List><Icon/>Update Employee data record.</List>
                        <List><Icon/>Delete Employee data record.</List>
                    </UList>
                    <Row>
                        <Button><Link to='/create' style={{textDecoration:"none",color:"white"}}>Add Employee record</Link></Button>
                        <Button><Link to='/employees' style={{textDecoration:"none",color:"white"}}>Employees List</Link></Button>
                    </Row>
                </Card>
            </Wrapper>
        </div>
    )
}
