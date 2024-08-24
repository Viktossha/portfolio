import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={'space-between'}>
            <SocialItemsList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'facebook'} width="14px" height="14px" viewBox="0 0 14 14"/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'twitter'} width="14px" height="14px" viewBox="0 0 14 14"/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'in'} width="14px" height="14px" viewBox="0 0 14 14"/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'youtube'} width="14px" height="14px" viewBox="0 0 14 14"/>
                    </SocialLink>
                </SocialItem>
            </SocialItemsList>

            <CopyRight>
                Template designed by : Templates Jungle
            </CopyRight>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: peachpuff;
    min-height: 20vh;
`

const SocialItemsList = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 10px
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`

`

const CopyRight = styled.small`

`

