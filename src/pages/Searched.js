import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Searched = () => {
    let param = useParams()
    const[searchrecipe, setSearchrecipe]= useState([])

    const getSearch = async (name)=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&query=${name}`)
        const data =await api.json()
        setSearchrecipe(data.results)
    }


    useEffect(()=>{
        getSearch(param.input)
    },[param.input])

  return (
    <Grid>
        {searchrecipe.map(item=>{
            return(  <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                    <img src={item.image}/>
                    <h4>{item.title}</h4>
                </Link>
                </Card>
            )
        })}
    </Grid>

  )
}
//{}[]
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
grid-gap: 2rem;
`
const Card= styled.div`
img{
    width: 100%;
    border-radius: 2rem;
    transition: 0.2s;
}
a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem;
}
img:hover{
    transform: scale(1.1);
    border-bottom: 3px solid green;
}
`
export default Searched