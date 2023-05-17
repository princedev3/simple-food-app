import Pages from "./pages/Pages";
import { BrowserRouter} from "react-router-dom";
import './App.css';
import Category from "./component/Category";
import Search from "./component/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";


function App() {

  console.log(process.env.REACT_APP_API)
  
  return (
    <div>
    
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}>delicous</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    
    </div>
  )
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.1rem;
font-weight: 400;
color: black;
`
const Nav = styled.div`
padding: 1.5rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`

export default App;

//\{}[]
