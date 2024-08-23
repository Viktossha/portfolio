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

`

const SkillPercent = styled.div`

`