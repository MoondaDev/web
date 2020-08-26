import React from 'react';
import styled from 'styled-components';
import Banner from '../../component/Banner'
import Menu from '../../component/Menu'
import MyCenter from '../../component/MyCenter'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    margin-top: 2rem;
`;

export default function Main() {
    return (
        <Wrapper>
            <Banner />
           
            <Menu />

            <MyCenter />
        </Wrapper>
    )
}
