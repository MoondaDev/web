import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:90%;
    margin-top:1rem;
`;

const Avatar = styled.div`
    width: 46px;
    height: 46px;
    background-size:cover;
    border-radius:50%;
    border: 1px solid #c9c7c7;
    background: white;
`;

const Content = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;

    div {
        &:first-child {
            color:#c9c7c7;
            font-size: 10px;
        }

        &:last-child {
            font-size:11px;
        }
    }
`;

const Date = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right:1rem;
    font-size: 10px;
    color: #c9c7c7;
`;

const CardWapper = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
`;

const More = styled.div`
    width:90%;
    border-bottom: 1px solid #e6e6e6;
    margin-top:1rem;
    margin-bottom:1rem;
`;

export default function TalkCard() {
    return (
        <Wrapper>
            
            <CardWapper>
                <Avatar />
                
                <Content>
                    <div>[공지] 신세계 백화점 경기점</div>
                    <div>여름학기 개강 및 수강신청 안내</div>
                </Content>

                <Date>
                    2020-06-26
                </Date>
            </CardWapper>

            <More />
        </Wrapper>
    )
}
