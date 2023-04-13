import React from 'react';
import { CardImage, Container, DescriptionCard, DescriptionWrapper, Point, TextCardWrapper, TitleCard } from './Card.styled';
import CopyButton from '../CopyButton/CopyButton';

export interface cardsProps {
    title: string;
    date: string;
    place: string;
    description?: string;
    image?: string;
}

const Card: React.FC<cardsProps> = ({ title, date, place, image, description }) => {
    return (
        <Container>
            <CopyButton value={`${title} ${date} ${place}`} />
            {image && <CardImage src={image} layout="fill" objectFit="cover" />}
            <TextCardWrapper>
                <TitleCard>{title}</TitleCard>
                {description && <DescriptionCard>{description}</DescriptionCard>}
                <DescriptionWrapper>
                    {date} <Point /> {place}
                </DescriptionWrapper>
            </TextCardWrapper>
        </Container>
    );
};

export default Card;
