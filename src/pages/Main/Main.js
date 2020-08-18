import React from 'react';
import styled from 'styled-components';
import Banner from '../../component/Banner'
import Menu from '../../component/Menu'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
`;

export default function Main() {
    return (
        <Wrapper>
            <Banner />
           
            <Menu />
        </Wrapper>
    )
}
