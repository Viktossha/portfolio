import React from 'react';
import styled from "styled-components";

export const MenuContacts = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((el, index) => <ListItem key={index}><Link href="">{el}</Link></ListItem>)}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    width: 33%;
     ul {
         display: flex;
         gap: 30px;
         flex-wrap: wrap;
         flex-direction: column;
     }
`

const ListItem = styled.li`
width: 50%;

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
