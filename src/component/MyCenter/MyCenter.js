import React from 'react'
import styled from 'styled-components';
import test from '../../styles/images/centerTest.png';


const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`;

const Title = styled.div`
    width: 90%;
    float:left;

    h1 {
        font-size:16px;
        font-weight: 800;
    }
`;

const Grid= styled.div`
    display : grid;
    width:100%;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    margin-top: 2rem;
    align-self: center;
    justify-self: center;
    margin-top: 2rem;
`;

const Container = styled.div`
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 11px;

    p {
        line-height: 1rem;

        &:last-child {
            font-size: 8px;
        }
    }
`;
const Item = styled.div`
    width: 46px;
    height: 46px;
    background-size:cover;
    border-radius:50%;
    background-image:url(${test});
    margin: 0 auto;
    margin-bottom: 0.3rem;
`;

//map을 통해서 Item에 props로 이미지를 넘겨서 background-url설정을 하되 마지막 인덱스에서는 추가/플러스 이미지로 변경 되도록 해야할 것 같음
export default function MyCenter() {
    return (
        <Wrapper>
            <Title>
                <h1>내 관심 문화센터</h1>
            </Title>
            

            <Grid>
                <Container>
                    <Item />
                    <p>신세계백화점</p>
                    <p>경기점</p>
                </Container>
                <Container>
                    <Item />
                    <p>신세계백화점</p>
                    <p>경기점</p>
                </Container>
                <Container>
                    <Item />
                    <p>신세계백화점</p>
                    <p>경기점</p>
                </Container>
                
            </Grid>
        </Wrapper>
    )
}
