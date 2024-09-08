import React from 'react';
import styled from "styled-components";
import {Logo} from '../../components/logo/Logo';
import {MenuHeader} from './menu/MenuHeader';
import {Container} from '../../components/Container';
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ['Home', 'About', 'Works', 'Blogs', 'Testimonials', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                <Logo fill={'#FFFFFF'}/>
                <MenuHeader menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    //background-color: lemonchiffon;
    //margin-bottom: 130px;
`
