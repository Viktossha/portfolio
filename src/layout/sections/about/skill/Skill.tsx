import React from 'react';
import styled from "styled-components";

type SkillPropsType = {
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillPercent></SkillPercent>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    
`

const SkillTitle = styled.h3`
    font-weight: 400;
    font-size: 17px;
    line-height: 124%;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #2f2f2f;
`

const SkillPercent = styled.div`

`