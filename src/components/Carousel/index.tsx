import React from 'react';
import styled from 'styled-components';

import BootstrapCarousel from 'react-bootstrap/Carousel';

import { Items } from '../../models/Item'

import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled('div')`
    background-color: black;
    overflow: hidden;
    padding: 10px;
    height: 100vh;
`;

const SlideContainer = styled('div')`
    // so that ImageCard can be absolutely positioned
    position: relative;

    // TODO: Fix this logic
    height: calc(100vh - 40px);
`;

const ImageCard = styled('a')`
    // No blue underline
    text-decoration: none;
    
    display: block;

    // Relative to ImageCard
    position: absolute;
    margin-top: 5%;

    width: 40%;

    // White space around the text
    padding: 50px;

    background-color: white;
    
    font-weight: 400;
    color: #1b1b1b;

    line-height: 1.1648;
    font-size: calc(3.12vh + 1rem);
`;

const Title = styled('h2')``;

const Caption = styled('div')`
    font-family: 'Roboto' sans-serif;
    font-size: 16px;
    letter-spacing: 0.843536px;

    margin-top: 20px;
`;

const Image = styled('img')`
    display: block;    
    
    width: 70%; 

    // relative to SlideContainer
    position: absolute;

    right: 0;
`;

export interface CarouselProps extends Items {}

const Carousel = (props: CarouselProps) => (
<Container>
    <BootstrapCarousel>
        {props.items.map(
            ({ image, link, title, caption }) => (
                <BootstrapCarousel.Item>
                    <SlideContainer>
                        <Image src={image}/>
                        <ImageCard href={link}> 
                            <Title>{title}</Title>
                            <Caption>{caption}</Caption>
                        </ImageCard>
                    </SlideContainer>
                </BootstrapCarousel.Item>
            )
        )}
    </BootstrapCarousel>
</Container>
)
export default Carousel;