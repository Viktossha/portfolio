import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {News} from "./news/News";
import news_1 from "../../../assets/images/blogs_1.webp"
import news_2 from "../../../assets/images/blogs_2.webp"
import news_3 from "../../../assets/images/blogs_3.webp"
import {Button} from "../../../components/Button";
import arrBlack from "../../../assets/images/arrow-black.svg"
import {Container} from "../../../components/Container";

export const Blogs = () => {
    return (
        <StyledBlogs>
            <Container>
                <SectionTitle extraText={'latest news'}>Blogs</SectionTitle>
                <FlexWrapper justify={'space-around'}>
                    <News title={'Graphic Designing Useful Tips & Best Practices'} extra={'Graphic Design'}
                          date={'July 1, 2021'} src={news_1}/>
                    <News title={'basic typography rules for ui designing'} extra={'Graphic Design'}
                          date={'July 1, 2021'} src={news_2}/>
                    <News title={'top 10 graphic designs review in 2021'} extra={'Graphic Design'} date={'July 1, 2021'}
                          src={news_3}/>
                </FlexWrapper>
                <FlexWrapper justify={'center'}>
                    <Button>view all blogs</Button>
                </FlexWrapper>
            </Container>
        </StyledBlogs>
    );
};

const StyledBlogs = styled.section`
    margin-bottom: 200px;  
    // ${Container} {
    //     padding: 0;
    // }

    ${FlexWrapper}:first-of-type {
        margin: 62px 0;
        gap: 46px;
    }

    ${Button} {
        background-color: transparent;
        border: none;
        color: #111111;

        &::after {
            content: url("${arrBlack}");;
        }
    }
`