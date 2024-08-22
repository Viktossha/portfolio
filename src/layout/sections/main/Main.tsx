import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <span>hi! everyone</span>
            <h1>Chris Lee <br/>
                brand designer</h1>
            <p>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</p>
            <button>get in touch</button>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    background-color: powderblue;
    min-height: 100vh;
    text-align: center;
`