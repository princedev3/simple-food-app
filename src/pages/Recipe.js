import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Recipe = () => {
    const param = useParams()
    const[recipe,setRecipe]  = useState({})
    const[actives,setActives]=useState("ingrident")

    const getRecipe = async ()=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/${param.name}/information?apiKey=${process.env.REACT_APP_API}`)
        const data =await api.json()
            setRecipe(data)
            
        
    }
    useEffect(()=>{
        getRecipe()
    },[param.name])

  return (<Detailwrapper>
        <div>
            <h3>{recipe.title}</h3>
            <img src={recipe.image}/>
        </div>
        <Info>
          
            <Button className={actives==="instruction"?"active":""} onClick={()=>setActives("instruction")}>Instruction</Button>


            
          
            { actives==="instruction" && (
                <h3>
                     <div dangerouslySetInnerHTML={{__html:recipe.summary}}></div>
                     <div dangerouslySetInnerHTML={{__html:recipe.instructions}}></div>
                </h3>
                

            )} 
        </Info>
    </Detailwrapper>
  )
}

const Detailwrapper = styled.div`
display: flex;
margin-top:5rem;
img{
    width: 25rem;
    margin-right: 2rem;
}
.active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}


`
const Button = styled.button`
padding: 1rem 2rem;
color: black;
border: 2px solid black;
margin-right: 1.5rem;
margin-bottom: 1.4rem;
font-weight: 600;
`
const Info = styled.div`
margin-left: 0rem;

li{
    list-style: none;
}
`
//{}[]
export default Recipe