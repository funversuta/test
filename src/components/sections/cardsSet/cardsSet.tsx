import React from 'react';
import { Container } from './cardsSet.styled';
import Card from '../../blocks/Card/Card';

export interface cardsSetProps {
    cards?: {
        title: string;
        date: string;
        place: string;
        description?: string;
        image: string;
    }[];
}

const CardsSet: React.FC<cardsSetProps> = ({ cards }) => {
    return (
        <Container>
            {cards?.map((item, index) => (
                <React.Fragment key={index}>
                    <Card {...item} />
                </React.Fragment>
            ))}
        </Container>
    );
};

export default CardsSet;
