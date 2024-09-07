import React from 'react';
import styled from "styled-components";

type AchievementPropsType = {
    title: string
    text: string
}

export const Achievement = (props: AchievementPropsType) => {
    return (
        <StyledAchievement>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </StyledAchievement>
    );
};

const StyledAchievement = styled.div`
    width: 30%;
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 22px;
    text-transform: capitalize;
    color: #111;
    margin: 55px 0 5px;
`

const Text = styled.p`
    font-weight: 300;
    font-size: 19px;
    line-height: 188%;
    letter-spacing: 0.02em;
    color: #282828;
    
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        height: 1px;
        width: 100%;
        bottom: 0;
        margin-bottom: -40px;
        background-color: #e2e2e2;
    }
`