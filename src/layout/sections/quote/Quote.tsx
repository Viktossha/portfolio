import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Quote = () => {
    return (
        <StyledQuote>
            <SectionTitle>quote of the day</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <Text>“Success is not final; failure is not fatal: it is the courage to continue that counts.”</Text>
                <Name>-Winston Churchill</Name>
            </FlexWrapper>
        </StyledQuote>
    );
};

const StyledQuote = styled.section`
    background-color: mistyrose;
    min-height: 50vh;
`

const Text = styled.blockquote`
    font-size: 25px;
`

const Name = styled.span`

`