import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import bg from "../../../assets/images/bg-testimonials.webp";

export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <SectionTitle extraText={'what clients says'}>Testimonials</SectionTitle>
            <FlexWrapper justify={'center'}>
                <Slider/>
            </FlexWrapper>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
    background-image: url("${bg}");
    background-color: #000000;
    padding: 110px 0 145px;

    ${SectionTitle} {
        color: #333;
        margin-bottom: 56px;

        &:before {
            background-color: transparent;
            color: #FFFFFF;
            border: 1px solid #333;
        }
    }
`