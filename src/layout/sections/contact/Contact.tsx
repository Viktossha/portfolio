import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {Logo} from "../../../components/logo/Logo";

export const Contact = () => {
    return (
        <StyledContact>
            <Subscription>
                <Logo/>
                <p>Subscribe to newsletter to get some updates related with branding, designs and more.</p>
                <input type="text" placeholder={'write your email address'}/>
                <button>subscribe it</button>
            </Subscription>

            <Menu menuItems={['Home', 'About', 'Services', 'Portfolio', 'Blogs', 'Contact']}/>

            <MainAddress>
                <p>Just feel free to contact if you wanna collaborate with me, or simply have a conversation.</p>
                <h4>templatesjungle@gmail.com</h4>
            </MainAddress>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 30vh;
    background-color: rgba(186,252,255,0.81);
    display: flex;
    justify-content: space-between;
`

const Subscription = styled.div`

`

const MainAddress = styled.div`

`

