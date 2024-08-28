import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Button} from "../../../components/Button";
import mainPhoto from '../../../assets/images/main-photo.webp'
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <SmallText>hi! everyone</SmallText>
                <MainTitle>Chris Lee <br/>
                    brand designer</MainTitle>
                <Text>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</Text>
                <Button>get in touch</Button>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    //background-color: powderblue;
    min-height: 100vh;
    text-align: left;
    margin-bottom: 92px;
`

const SmallText = styled.span`
    font-family: "Inconsolata", monospace;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    padding: 4px 12px;
    background: rgba(236, 236, 236, 0.17);
`

const MainTitle = styled.h1`
    font-weight: 800;
    font-size: 108px;
    letter-spacing: -0.04em;
    text-transform: capitalize;
    margin: 45px 0 35px;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.02em;
`