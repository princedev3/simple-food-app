import {FaPizzaSlice,FaHamburger} from "react-icons/fa"
import {GiChopsticks,GiNoodles} from "react-icons/gi"
import {NavLink} from "react-router-dom"
import styled from "styled-components"




const Category = () => {
  return (
    <List>
        <SLink to={"/cuisine/italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/american"}>
            <FaHamburger/>
            <h4>american</h4>
        </SLink>
        <SLink to={"/cuisine/thai"}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/japanese"}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 2rem 0;
`
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 1.5rem;
text-decoration: none;
background: linear-gradient(35deg,#494949, #313131);
width: 4rem;
height: 4rem;
cursor: pointer;
transform: scale(0.8);

h4{
    color: white;
    font-size: 0.8rem;
}
svg{
    color: white;
    font-size: 1.4rem;
}
&.active{
    background: linear-gradient(to right,#f27121,#e94057);
    svg{
        color: white;
    }
    h4{
        color: white;
    }
}
`
export default Category

//{}[]