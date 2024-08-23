import React from 'react';
import styled from "styled-components";

type NewsPropsType = {
    title: string
    date: string
    src: string
}

export const News = (props: NewsPropsType) => {
    return (
        <StyledNews>
            <img src={props.src} alt=""/>
            <span>{props.date}</span>
            <h3>{props.title}</h3>
        </StyledNews>
    );
};

const StyledNews = styled.div`
    img {
        width: 396px;
        display: block;
    }
`