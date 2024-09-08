import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {MenuContacts} from "./menu/MenuContact";

export const Contacts = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper>
                    <Subscription>
                        <Logo fill={'#000000'}/>
                        <Text>Subscribe to newsletter to get some updates related with branding, designs
                            and
                            more.</Text>
                        <Input type="text" placeholder={'write your email address'}/>
                        <Button>subscribe it</Button>
                    </Subscription>

                    <MenuContacts menuItems={['Home', 'About', 'Services', 'Portfolio', 'Blogs', 'Contacts']}/>

                    <MainAddress>
                        <Text>Just feel free to contact if you wanna collaborate with me, or simply have a
                            conversation.</Text>
                        <Email>templatesjungle@gmail.com</Email>
                    </MainAddress>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    padding-bottom: 100px;
    ${FlexWrapper} {
        
    }
`

const Subscription = styled.div`
    width: 33%;
    
    ${Button} {
        padding: 11px 0;
        line-height: normal;
        width: 100%;

        &::after {
            content: none;
        }
    }
`

const Text = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 225%;
    letter-spacing: 0.02em;
    color: #494949;
    margin: 34px 0 38px;
`

const Input = styled.input`
    background-color: #F4F4F4;
    max-width: 304px;
    width: 100%;
    padding: 14px 22px;
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 17px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: #494949;
    border: none;
    margin-bottom: 14px;

    &::placeholder {
        color: #494949;
    }

    &:focus-visible {
        outline: 1px solid #494949;
    }
`

const MainAddress = styled.div`
    width: 33%;
`

const Email = styled.h4`
    font-weight: 300;
    font-size: 30px;
    line-height: 183%;
    letter-spacing: 0.01em;
    color: #2f2f2f;
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: #2f2f2f;
        bottom: -10px;
    }
`

