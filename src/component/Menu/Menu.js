import React from 'react'
import styled from 'styled-components';
import test from '../../styles/images/griditem.svg';
import MoreIcon from '../../styles/images/More.svg';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Grid= styled.div`
    display : grid;
    width:100%;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    margin-top: 2rem;
    align-self: center;
    justify-self: center;
    margin-bottom: 2rem;
`;

const Container = styled.div`
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 11px;
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

const More = styled.div`
    width:90%;
    border-bottom: 1px solid #e6e6e6;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
    width: 5rem;
    height: 1rem;
    background-image:url(${MoreIcon});
    margin-bottom: 1rem;
`;

//메뉴 더 보기 기능을 구현하려면 Item에 있는 이미지, 제목을 json파일로 관리해서 map을 사용해 컴포넌트를 그려야 할 것 같음 혹은 DB저장

export default function Menu() {

    return (
        <Wrapper>
             <Grid>
                <Container>
                    <Item />
                    영유아
                </Container>
                <Container>
                    <Item />
                    초등.청소년
                </Container>
                <Container>
                    <Item />
                    성인
                </Container>
                <Container>
                    <Item />
                    장애
                </Container>
             </Grid>

             <More>
                <Button/>
             </More>
        </Wrapper>
       
    )
}
