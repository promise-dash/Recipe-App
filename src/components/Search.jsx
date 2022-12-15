import React, { useState } from 'react'
import styled from 'styled-components'
import { GoSearch } from "react-icons/go"
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate(`/search/${input}`);
    }

  return (
    <FormStyle onSubmit={handleSubmit}>
        <input type="text" placeholder='Search' onChange={(e) => {setInput(e.target.value)}}/>
        <GoSearch />
    </FormStyle>
  )
}

const FormStyle = styled.form`
 width: 80%;
 background: linear-gradient(35deg, #494949, #313131);
 border-radius: 1rem;
 padding: 0 5%;
 margin: auto;
 display: flex;
 align-items: center;
 justify-content: space-between;

 input{
    border: none;
    color: white;
    padding: 1rem 3rem;
    outline: none;
    width: 90%;
    background: transparent
 }
 input::placeholder{
    color: white
 }
 svg{
    color: white;
    cursor: pointer;
 }
`

export default Search