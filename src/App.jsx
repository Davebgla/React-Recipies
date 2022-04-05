import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Catagory from "./components/Catagory";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Hungry?</Logo>
      </Nav>
      <Search/>
      <Catagory/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
