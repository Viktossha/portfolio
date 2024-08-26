import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Button} from "../../../components/Button";
import mainPhoto from '../../../assets/images/main-photo.webp'
export const Main = () => {
    return (
        <StyledMain>
            <span>hi! everyone</span>
            <h1>Chris Lee <br/>
                brand designer</h1>
            <p>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</p>
            <Button>get in touch</Button>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    //background-color: powderblue;
    min-height: 100vh;
    text-align: center;
`