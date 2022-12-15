import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

function Category() {
  return (
    <List>
        <Option to={"/cuisine/italian"}>
            <FaPizzaSlice/>
            <h6>Italian</h6>
        </Option>
        <Option to={"/cuisine/american"}>
            <FaHamburger/>
            <h6>American</h6>
        </Option>
        <Option to={"/cuisine/thai"}>
            <GiNoodles/>
            <h6>Thai</h6>
        </Option>
        <Option to={"/cuisine/korean"}>
            <GiChopsticks/>
            <h6>Korean</h6>
        </Option>
    </List>
  )
}

const List = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
 margin: 2rem 20%;
 cursor: pointer;
`;

const Option = styled(NavLink)`
 width: 3.7rem;
 height: 3.7rem;
 border-radius: 50%;
 background: linear-gradient(35deg, #494949, #313131);
 color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 text-decoration: none;
 transition: transform 0.2s;

 :hover{
    transform: scale(1.07);
 }

 h6{
    color: white;
    margin-top: 5px;
    font-size: 8px;
    text-decoration: none;
 }
 svg{
    color: white;
    font-size: 1.3rem;
 }
 &.active{
    background: linear-gradient(to right, #f27121, #e94057);
 }
`

export default Category