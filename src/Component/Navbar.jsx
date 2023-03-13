
import React, { useState,useContext} from "react";
import styled from "styled-components";
import BasketContext from "../Contexts/Basket";
import "@fontsource/ubuntu";

import { Link } from "react-router-dom";
import './all.css'




const Container = styled.div`
  height: 60px;
 
`;



const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;



const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-style:italic;


`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-size: 1.5rem;
`;

const Navbar = ({ }) => {
  const menu = [
    { alias: '', name: 'Home' },
    { alias: 'product', name: 'Product' },
    { alias: 'about', name: 'Abount' }
  ]
const basket = useContext(BasketContext);
const [items] = useState(basket);

  return (
    <>
      <Container>
        <Center>
          <Logo>Comfy</Logo>
        </Center>

        <div className="Left">
          {menu.map(nav => {
            return <Link key={nav.alias} to={`/${nav.alias}`}>{nav.name}</Link>
          })}
        </div>

        <Right>
          <MenuItem>
          
            <Link to='./cart'>
              <i class="fa-solid fa-cart-shopping"></i>
              
              <span className="item-count">{items.length}</span>

            </Link>
          </MenuItem>
        </Right>
      </Container>
    </>
  );
};

export default Navbar;
