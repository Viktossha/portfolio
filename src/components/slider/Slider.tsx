import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import avatar from "../../assets/images/avatar.webp";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper direction={'column'}>
                <Text>“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec
                    dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”
                </Text>
                <Photo src={avatar} alt={''}/>
                <Name>Lucas wolfer</Name>
                <ExtraText>ceo - raisins</ExtraText>
            </FlexWrapper>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 29px;
    line-height: 1.6;
    letter-spacing: 0.01em;
    color: #fff;
    margin-bottom: 48px;
`

const Photo = styled.img`
    display: block;
    margin: 0 auto;
    width: 66px;
    height: 66px;
`

const Name = styled.span`
    font-weight: 500;
    font-size: 21px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: #fff;
    margin: 20px 0 10px;
`

const ExtraText = styled.span`
    display: block;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #f6f6f6;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        background-color: darkcyan;
    }
`