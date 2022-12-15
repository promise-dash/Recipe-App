import React from 'react';
import {GiKnifeFork} from "react-icons/gi";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <SemiDiv>
              <Logo>
                  <GiKnifeFork />
              </Logo>
              <p>delicious</p>
            </SemiDiv>
        </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem 3rem;
`;

const SemiDiv = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  width: fit-content;
  p{
    color: black;
    font-family: 'lobster two', cursive;
    font-weight: bold;
    font-size: 20px;
  }
`;

const Logo = styled.div`
 width: 4rem;
 height: 4rem;
 border-radius: 50%;
 background: linear-gradient(to right, #f27121, #e94057);
 color: black;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;

 svg{
    font-size: 2.3rem;
 }
`;

export default Header