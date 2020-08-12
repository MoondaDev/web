import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../../styles/images/Logo.png';

const Wrapper = styled.div`
  width: 100%;
  border: 0;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 0px;
  z-index: 2;
  `;

  const Image = styled.div`
    background: url(${Logo});
    width:23px;
    height:27px;
    background-size: 100% 100%;
  `;


export default function Header() {
    return (
        <Wrapper>
            <Link to="/">
                <Image />
            </Link>
        </Wrapper>
    )
}
