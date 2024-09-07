import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Achievement} from "./achievement/Achievement";
import {Container} from "../../../components/Container";

export const Achievements = () => {
    return (
        <StyledAchievements>
            <Container>
            <SectionTitle extraText={'awards and recognition'}>Achievement</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
                <Achievement title={'Interior design'} text={'Breakthrough designer of the year 2020'}/>
            </FlexWrapper>
            </Container>
        </StyledAchievements>
    );
};

const StyledAchievements = styled.section`
    margin: 146px 0 168px; //нижний марджин прибавлен на 40px из-за отступа у псевдоэлемента в минус 40px
    ${FlexWrapper} {
        row-gap: 50px;
    }
`

