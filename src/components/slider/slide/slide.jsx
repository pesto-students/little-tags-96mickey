import React from 'react';
import { SlideStyled } from './slide.styled';

export const Slide = ({ content, width }) => (
    <SlideStyled width={width} content={content} />
)
