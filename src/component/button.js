import React from 'react'
import styled from 'styled-components';
import test from '../styles/test.svg';

const Button = styled.button`
    background: url(${test}) no-repeat;
    width:100px;
    height:100px;
`;

export default function button() {
    return (
            <div>
                <Button onClick={()=> console.log("테스트")}></Button>
            </div>
    )
}
