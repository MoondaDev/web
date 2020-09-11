import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage from '../../styles/images/banner.png';
import './style.scss';
import BannerTest from '../../styles/images/BannerTest.png'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
`;

const Image = styled.div`
background: url(${BannerImage});
width:100%;
height:79px;
background-size: 100% 100%;
margin-top: 0.6rem;
`;



export default function Banner() {

    const settings ={
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
        <div className="ft-slick__dots--custom">
            <div className="loading" />
        </div>
        )
    }

    
    return (
        <Wrapper>

            <Slider 
                {...settings}
            >
                <div style={{width:'100%'}}>
                    <img  style={{width:'100%'}} src={BannerTest}/>
                </div>
                {/* <div style={{width:'100%'}}>
                    <img src="data:image/jpeg;base64,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"/>
                </div>
                <div style={{width:'100%'}}>
                    <img style={{width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk2OC9Ngm6hN5DMkJfK4NHOe4mXbHqepf9Eg&usqp=CAU"/>
                </div>
                <div style={{width:'100%'}}>
                    <img  style={{width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcWQtST377nLPIGE1ixfsRL180-9n9yAibDQ&usqp=CAU"/>
                </div> */}
                
            </Slider>

            <Image />

        </Wrapper>
    )
}
