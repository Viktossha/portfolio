import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {News} from "./news/News";
import news_1 from "../../../assets/images/blogs_1.webp"
import news_2 from "../../../assets/images/blogs_2.webp"
import news_3 from "../../../assets/images/blogs_3.webp"

export const Blogs = () => {
    return (
        <StyledBlogs>
            <SectionTitle>Blogs</SectionTitle>
            <FlexWrapper justify={'space-around'}>
               <News title={'Graphic Designing Useful Tips & Best Practices'} date={'Graphic Design   /   July 1, 2021'} src={news_1}/>
               <News title={'basic typography rules for ui designing'} date={'Graphic Design   /   July 1, 2021'} src={news_2}/>
               <News title={'top 10 graphic designs review in 2021'} date={'Graphic Design   /   July 1, 2021'} src={news_3}/>
            </FlexWrapper>
            <a href="">view all blogs</a>
        </StyledBlogs>
    );
};

const StyledBlogs = styled.section`
    background-color: beige;
    min-height: 100vh;
`