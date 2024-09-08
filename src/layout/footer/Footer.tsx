import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <SocialItemsList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'facebook'} width="7px" height="14px" viewBox="0 0 7 14"/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'twitter'} width="17px" height="14px" viewBox="0 0 17 14"/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'in'} width="14px" height="14px" viewBox="0 0 14 14"/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'youtube'} width="18px" height="14px" viewBox="0 0 18 14"/>
                            </SocialLink>
                        </SocialItem>
                    </SocialItemsList>

                    <CopyRight>
                        Template designed by : Templates Jungle
                    </CopyRight>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryColor};
    padding: 64px 0 66px;
`

const SocialItemsList = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 66px
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const CopyRight = styled.small`
    font-weight: 500;
    font-size: 17px;
    line-height: 212%;
    letter-spacing: 0.02em;
    color: #8c8c8c;
`

