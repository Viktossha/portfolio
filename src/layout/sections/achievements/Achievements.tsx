import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Achievement} from "./achievement/Achievement";

export const Achievements = () => {
    return (
        <StyledAchievements>
            <SectionTitle>Achievements</SectionTitle>
            <FlexWrapper wrap={'wrap'}>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
            </FlexWrapper>
        </StyledAchievements>
    );
};

const StyledAchievements = styled.section`
    background-color: lavender;
    min-height: 100vh;
`

