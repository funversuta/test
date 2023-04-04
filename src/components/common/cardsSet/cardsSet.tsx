import React from 'react';
import { Container } from './cardsSet.styled';
import Card from '../Card/Card';

export interface cardsSetProps {
    cards?: {
        title: string;
        date: string;
        place: string;
        image: string;
    }[];
}

const CardsSet: React.FC<cardsSetProps> = ({ cards }) => {
    return (
        <Container>
            {cards?.map((item: any, index: number) => (
                <React.Fragment key={index}>
                    <Card {...item} />
                </React.Fragment>
            ))}
        </Container>
    );
};

export default CardsSet;
