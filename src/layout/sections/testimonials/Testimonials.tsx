import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <SectionTitle>Testimonials</SectionTitle>
            <FlexWrapper justify={'center'}>
                <Slider/>
            </FlexWrapper>
        </StyledTestimonials>
    );
};

const StyledTestimonials =  styled.section`
    background-color: aliceblue;
    min-height: 50vh;
`