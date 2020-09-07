import React from 'react';
import styled from 'styled-components';
import Banner from '../../component/Banner'
import Menu from '../../component/Menu'
import MyCenter from '../../component/MyCenter'
import Category from '../../component/Category'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
`;

export default function Main() {
    return (
        <Wrapper>
            <Category />
            
            <Banner />
           
            <Menu />

            <MyCenter />
        </Wrapper>
    )
}
