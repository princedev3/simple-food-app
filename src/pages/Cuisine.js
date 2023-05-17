import {  useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

//{}[]
const Cuisine = () => {
    
    const param = useParams()
    const[cuisine,setCuisine] = useState([])
    const getCuisine = async (name)=> {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&cuisine=${name}`)
        const data =await api.json()
        setCuisine(data.results)

    }

    useEffect(()=>{
        getCuisine(param.type)
    },[param.type])


  return (
    <Grid
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.3}}

    >
        {cuisine.map(item=>{
            return(
                <Card key={item.id}>
                    <Link to={"/recipe/" +item.id}>
                        <img src={item.image} alt="name"/>
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
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

export default Cuisine