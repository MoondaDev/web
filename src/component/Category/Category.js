import React from 'react';
import styled from 'styled-components';
import TestImg1 from '../../styles/images/CategoryTest1.svg';
import Bar from '../../styles/images/CategoryBar.svg';
import GreenBar from '../../styles/images/GreenBar.svg';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
`;

const Grid = styled.div`
    display : grid;
    width : 100%;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);
    margin-top : 1rem;
    align-self : center;
    justify-self : center;
    margin-botton : 1rem;
`;

const Container = styled.div`
    display : flex;
    width : 100%;
    justify-content : center;
    align-items : center;
    flex-direction : column;
`;

const Item = styled.div`
    width: 59px;
    height: 22px;
    background-size:cover;
    background-image:url(${TestImg1});
    margin: 0 0.3rem;
`;

const BarContainer = styled.div`
    display : flex;
    width : 100%;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    background:url(${Bar});
`;

const NowBar = styled.div`
    width : 100%;
    height : 5px;
    background-size : cover;
    background-image:url(${GreenBar});
`;

export default function Category() {
    return (
        <Wrapper>
            <Grid>
                {/* 성인 카테고리 */}
                <Container> 
                    <Item />
                </Container>

                {/* 키즈 카테고리 */}
                <Container>
                    <Item/>
                </Container>
            </Grid>

            <Grid>
                <BarContainer>
                    <NowBar/>
                </BarContainer>
                <BarContainer>
                    {/* <NowBar/> */}
                </BarContainer>
            </Grid>

        </Wrapper>
    )
}