import styled from "styled-components";
import {theme} from "../styles/Theme";

type SectionTitlePropsType = {
    extraText?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    text-align: center;
    color: ${theme.colors.headerColor};
    font-family: sans-serif;
    font-weight: 300;
    font-size: 120px;
    line-height: 150%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    
    position: relative;
    z-index: 0;
    
    &:before {
        content: '${props => props.extraText || ''}';
                
        position: absolute;
        display: inline-block;
        transform: translateX(-50%);
        left: 50%;
        top: 45%;

        font-family: 'Inconsolata', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 126%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #111;
        background-color: #FFFFFF;
        z-index: 1;
        border: 1px solid ${theme.colors.headerColor};
        //width: max-content;
        padding: 0 10px;
    }
`