import React from 'react';
import styled from 'styled-components';

import { Items } from '../models/Item'

const Container = styled('div')`
    background-color: black;

    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-auto-rows: min-content;
`;

const Article = styled('article')`
    background-color: #fff;
    padding-bottom: 5%;
    text-align: center;
`;

const ImageWrapper = styled('div')`
    background-color: black;
    display: flex;
    height: 300px;
    overflow: hidden;
    position: relative;
`;

const Image = styled('img')`
    width: 100%;
    position: absolute;
`;

const Title = styled('h2')`
    padding: 40px;
`;

export interface IArticleList extends Items {}

export default ({ items }: IArticleList) => (
    <Container>
        {items.map(({
            title,
            image
        }) => (
            <Article>
                <ImageWrapper>
                    <Image src={image} />
                </ImageWrapper>
                <Title>{title}</Title>
            </Article>
        )) }
    </Container>
);
