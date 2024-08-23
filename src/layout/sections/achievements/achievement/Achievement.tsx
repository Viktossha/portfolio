import React from 'react';
import styled from "styled-components";

type AchievementPropsType = {
    title: string
    text: string
}

export const Achievement = (props: AchievementPropsType) => {
    return (
        <StyledAchievement>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </StyledAchievement>
    );
};

const StyledAchievement = styled.div`
    width: 33%;
`