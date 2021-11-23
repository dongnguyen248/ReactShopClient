import styled from 'styled-components';
import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { sliderItems } from '../data';
import { mobile } from '../responsive';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: 'none' })}
`;
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(prop) => prop.direction === 'left' && '10px'};
    right: ${(prop) => prop.direction === 'right' && '10px'};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #${(props) => props.bg};
`;
const Wrapper = styled.div`
    height: 100%;
    transform: translateX(${(props) => props.sliderIndex * -100}vw);
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Img = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 50px;
`;
const Desc = styled.p`
    font-size: 20px;
    margin: 50px 0px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: #008080;
        color: #fff;
    }
`;
const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const handleSlide = (direction) => {
        if (direction === 'left') {
            setSliderIndex(
                sliderIndex > 0 ? sliderIndex - 1 : sliderItems.length - 1,
            );
        } else {
            setSliderIndex(
                sliderIndex < sliderItems.length - 1 ? sliderIndex + 1 : 0,
            );
        }
    };
    return (
        <Container>
            <Arrow direction='left' onClick={() => handleSlide('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Arrow direction='right' onClick={() => handleSlide('right')}>
                <ArrowRightOutlined />
            </Arrow>
            <Wrapper sliderIndex={sliderIndex}>
                {sliderItems.map((item) => {
                    return (
                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Img src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOW NOW</Button>
                            </InfoContainer>
                        </Slide>
                    );
                })}
            </Wrapper>
        </Container>
    );
};

export default Slider;
