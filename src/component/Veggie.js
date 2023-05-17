import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Veggie = () => {

    useEffect(()=>{
        getPopular()
    },[])

    const [veggie,setVeggie]= useState([])
    
    const getPopular = async ()=> {
        const check = localStorage.getItem("popular")
        if(check){
            setVeggie(JSON.parse(check))
        }else{

            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9&tags=vegetarian`)
            const data =await api.json()
            localStorage.setItem("popular",JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        }
    }

  return (
    <Wrapper>
    <h3>Vegeterian Picks</h3>
    <Splide options={{
        perPage:3,
        arrows:false,
        pagination:false,
        drag:"free",
        gap:"3rem",
    }}>
    {veggie.map(recipe=>{
     return (
     <SplideSlide key={recipe.id}>
        <Card>
            <Link to={"/recipe/" +recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt='name'/>
                <Gradient/>
            </Link>
        </Card>
      </SplideSlide>
   ) 
   })}
   </Splide>
</Wrapper>
  )
}



const Wrapper =styled.div `
margin: 4rem 0rem;
`
const Card = styled.div`
min-height:15rem ;
border-radius: 2rem;
overflow: hidden;
position:  relative;

img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
}
p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    text-align: center;
    transform: translate(-50%,0%);
    color: white;
    font-weight: 600;
    height: 40%;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
const Gradient = styled.div`
z-index: 3;
width: 100%;
height: 100%;
position: absolute;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`

export default Veggie