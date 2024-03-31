import React from 'react';
import styled from "styled-components";
import {Icon} from '../icon/Icon'
export const Logo = () => {
    return (
        <a href="">
            {/*Chris <span>.</span>*/}
            <Icon iconId={'logo'} width={'64px'} height={'64px'} viewBox="0 0 64 64"/>
        </a>
    );
};
