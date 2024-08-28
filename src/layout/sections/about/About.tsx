import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
            <SectionTitle>ABOUT</SectionTitle>
            <FlexWrapper >
                <Description>
                    <Text>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                        consequatur aut perferendis doloribus asperiores repellat quia voluptas sit aspernatur te natus
                        accusan. maiores alias consequatur aut equatur aut perferendi.</Text>
                    <Button>about me</Button>
                </Description>

                <Skills>
                    <Skill title={'Photoshop'}/>
                    <Skill title={'Illustrator'}/>
                    <Skill title={'Figma'}/>
                    <Skill title={'after effect'}/>
                    <Skill title={'indesign'}/>
                </Skills>
            </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    ${SectionTitle} {
        text-align: left;

        &:before {
            content: 'who am i';
            left: 0;
            transform-origin: top left;
            transform: translateX(100%);
        }
    }
    
    ${FlexWrapper} {
        gap: 120px;
    }
    
    margin-bottom: 118px;
`

const Description = styled.div`
    width: 638px;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 238%;
    letter-spacing: 0.02em;
    color: #555;
    margin: 20px 0 60px;
`

const Skills = styled.div`

`