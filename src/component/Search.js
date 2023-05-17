import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Search = () => {

const navigate = useNavigate()

    const[input, setInput]= useState("")

    const submitHandler = e=>{
        e.preventDefault()
        navigate("/searched/"+input)
    }

  return (
    <div>
        <FormList onSubmit={submitHandler}>
            <FaSearch/>
            <input type='text' value={input} onChange={e=>setInput(e.target.value)}/>
        </FormList>
    </div>
  )
}

const FormList = styled.form`
margin: 0 auto;
width: 70%;
position: relative;

input{
    width: 100%;
    height: 2.2rem;
    left: 0;
    font-size: 1.3rem;
    outline: none;
    background: linear-gradient(50deg,rgba(0,0,0,1),rgba(0,0,0,0.8));
    border: none;
    border-radius: 1rem;
    color: white;
    padding: 0.1rem;
    padding-left: 2rem;
    font-weight: 100;
}
svg{
    position: absolute;
    color:white;
    z-index: 10;
    top: 50%;
    left: 0;
    transform: translate(50%,-50%);
}

`

export default Search