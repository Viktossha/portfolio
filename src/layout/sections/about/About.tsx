import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Button} from "../../../components/Button";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>ABOUT</SectionTitle>
            <FlexWrapper>
                <StyledDescription>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                        consequatur aut perferendis doloribus asperiores repellat quia voluptas sit aspernatur te natus
                        accusan. maiores alias consequatur aut equatur aut perferendi.</p>
                    <Button>about me</Button>
                </StyledDescription>

                <StyledSkills>
                    <Skill title={'Photoshop'}/>
                    <Skill title={'Illustrator'}/>
                    <Skill title={'Figma'}/>
                    <Skill title={'after effect'}/>
                    <Skill title={'indesign'}/>
                </StyledSkills>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
background-color: mistyrose;
    min-height: 100vh;
`

const StyledDescription = styled.div`

`

const StyledSkills = styled.div`

`