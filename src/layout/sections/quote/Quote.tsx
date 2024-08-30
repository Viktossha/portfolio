import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Quote = () => {
    return (
        <StyledQuote>
            <SectionTitle>quote of the day</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <Text>“Success is not final; failure is not fatal: it is the<br/> courage to continue that counts.”</Text>
                <Name>-Winston Churchill</Name>
            </FlexWrapper>
        </StyledQuote>
    );
};

const StyledQuote = styled.section`
    background-color: #0D0D0D;
    
    ${SectionTitle} {
        font-family: "Jost", sans-serif;
        padding-top: 105px;

        &::before {
            content: '';
            width: 222px;
            height: 4px;
            background-color: #FFFFFF;
            top: 100%; /* Размещаем псевдоэлемент ниже родителя */
        }
    }
`

const Text = styled.blockquote`
    font-weight: 400;
    font-size: 34px;
    line-height: 174%;
    text-align: center;
    color: #FFFFFF;
    margin: 85px 0 50px;
`

const Name = styled.span`
    font-weight: 700;
    font-size: 18px;
    line-height: 180%;
    color: #999;
    margin-bottom: 126px;
`