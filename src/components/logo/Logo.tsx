import React from 'react';
import {Icon} from '../icon/Icon'
export const Logo = (props: {fill?: string}) => {
    return (
        <a href="">
            {/*Chris <span>.</span>*/}
            <Icon iconId={'logo'} width={'64px'} height={'64px'} viewBox="0 0 64 64" fill={props.fill}/>
        </a>
    );
};
