import React from 'react';
import styled from "styled-components";

type NewsPropsType = {
    title: string
    extra: string
    date: string
    src: string
}

export const News = (props: NewsPropsType) => {
    return (
        <StyledNews>
            <Image src={props.src} alt=""/>
            <TextWrapper>
                <Extra>{props.extra}&nbsp;&nbsp;/&nbsp;&nbsp;</Extra>
                <Date>{props.date}</Date>
                <Title>{props.title}</Title>
            </TextWrapper>
        </StyledNews>
    );
};

const StyledNews = styled.div`
    position: relative;
    display: inline-block;
    background-color: #000;
`

const Image = styled.img`
    width: 396px;
    display: block;
    opacity: 0.6;
`

const TextWrapper = styled.div`
    position: absolute;
    margin: 0 48px;
    bottom: 8%;
`

const Extra = styled.span`
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #fcfcfc;
`

const Date = styled.span`
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #fcfcfc;
`

const Title = styled.h3`
    font-weight: 700;
    font-size: 26px;
    line-height: 160%;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #fff;
    margin-top: 16px;
`