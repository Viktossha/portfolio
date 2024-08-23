import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Portfolio</SectionTitle>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: seashell;
    min-height: 100vh;
`