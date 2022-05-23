import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper=styled.div`
display:flex;
align-items:center;
background-color:#a8a59d;
`
const Brand=styled.a`
text-decoration:none;
font-size:24px;
font-family:serif;
padding:0 20px;
color:black;
&:hover{
    color:white;
    cursor:pointer;
}
`
const NavItem=styled(Link)`
margin:10px;
padding:10px 20px;
color:white;
text-decoration:none;
&:hover{
    color:#000011;
}
`

export default function Navbar() {
  return (
    <div>
        <Wrapper>
            <Brand href='/'>TestProject</Brand>
            <NavItem to='/employees'>Employees</NavItem>
            <NavItem to='/create'>Add Employee</NavItem>
        </Wrapper>
    </div>
  )
}
