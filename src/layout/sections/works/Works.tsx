import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import img1 from "../../../assets/images/work-1.webp"
import img2 from "../../../assets/images/work-2.webp"
import img3 from "../../../assets/images/work-3.webp"
import img4 from "../../../assets/images/work-4.webp"
import img5 from "../../../assets/images/work-5.webp"
import img6 from "../../../assets/images/work-6.webp"
import {Button} from "../../../components/Button";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle extraText={'latest works'}>Portfolio</SectionTitle>
            <GridContainer>
                <div><img src={img1} alt=""/><h4>magazine front design</h4></div>
                <div><img src={img2} alt=""/><h4>coffee bottle mockup</h4></div>
                <div><img src={img3} alt=""/><h4>product bottle design</h4></div>
                <div><img src={img4} alt=""/><h4>product tag mockup</h4></div>
                <div><img src={img5} alt=""/><h4>magazine & brochure mockup</h4></div>
                <div><img src={img6} alt=""/><h4>perfume brand identity</h4></div>
            </GridContainer>
            <Button>view all portfolio</Button>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
`

const GridContainer = styled.div`
    display: grid;
    justify-content: center;
    gap: 62px;
    grid-template-columns: repeat(2, minmax(auto, 617px));
    //grid-template-rows: masonry;
    
    h4 {
        font-weight: 400;
        font-size: 26px;
        line-height: 104%;
        text-transform: lowercase;
        color: #2f2f2f;
        text-align: right;
        margin-top: 18px;
        width: max-content;
        
        position: relative;
        
        &::before {
            content: '';
            display: inline-block;
            position: absolute;
            height: 3px;
            width: 100%;
            background-color: #2f2f2f;
            right: 0;
            bottom: -10px;
        }
    }
`