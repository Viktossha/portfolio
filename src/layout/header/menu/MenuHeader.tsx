import React from 'react';
import styled from "styled-components";

export const MenuHeader = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((el, index) => <ListItem key={index}><Link href="">{el}</Link></ListItem>)}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
     ul {
         display: flex;
         gap: 30px;
     }
`

const ListItem = styled.li`
    &:hover {
        opacity: 0.5;
    }
`

const Link = styled.a`
    font-family: 'Manrope',  'sans-serif';
    font-weight: 600;
    font-size: 17px;
    text-transform: uppercase;
    color: #8f8f8f;
`
