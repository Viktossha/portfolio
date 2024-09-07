import styled from "styled-components";
import arr from "../assets/images/arrow.svg"

export const Button = styled.button`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 17px;
    line-height: 235%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    border: 1px solid #181818;
    padding: 11px 60px 11px 36px;
    background-color: #181818;
    
    position: relative;
    
    &::after {
        position: absolute;
        content: url("${arr}");
        margin-left: 12px;
    }
`