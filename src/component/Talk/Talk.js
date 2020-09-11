import React from 'react';
import styled from 'styled-components';
import TalkCard from './TalkCard';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`;

const Title = styled.div`
    display:flex;
    justify-content: space-between;
    width: 90%;
    float:left;
    h1 {
        font-size:16px;
        font-weight: 800;
    }

    div {
        font-size: 9px;
        color:#c9c7c7;
        margin-right:1rem;
    }
`;


export default function Talk() {
    return (
        <Wrapper>
            <Title>
                <h1>관심 문화센터 알림 톡!</h1>
                <div>전체보기</div>
            </Title>

            <TalkCard/>

            <TalkCard/>

        </Wrapper>
    )
}
