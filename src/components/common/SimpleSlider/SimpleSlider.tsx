import React, { useState } from 'react';
import { Container, SimpleSliderSwiper } from './SimpleSlider.styled';
import Card, { cardsProps } from '../Card/Card';
import SwiperCore, { Controller, Keyboard, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import SliderNavigation from '../SliderNavigation/SliderNavigation';

interface SimpleSliderProps {
    // Слишком много типов any
    cards: {
        items: {
            title: string;
            description?: string;
            date: string;
            place: string;
            image: string;
        }[];
    };
    showNavigation?: boolean;
    onSwiper?: (swiper: SwiperCore) => void;
}

SwiperCore.use([Controller, Keyboard, Autoplay]);

const SimpleSlider: React.FC<SimpleSliderProps> = ({ cards, showNavigation }) => {
    const [swiper, setSwiper] = useState<SwiperCore>();
    const [positionSlider, setPositionSlider] = useState('beginning');

    const swiperOptions = {
        allowTouchMove: true,
        grabCursor: true,
        keyboard: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        },
        loop: true,
        spaceBetween: 8
    };

    return (
        <Container options={{ target: 'top' }}>
            {cards.items.length > 1 ? (
                <>
                    <SimpleSliderSwiper
                        onSwiper={setSwiper}
                        {...swiperOptions}
                        onSlideChange={(swiper) =>
                            swiper.isBeginning
                                ? setPositionSlider('beginning')
                                : swiper.isEnd
                                ? setPositionSlider('end')
                                : setPositionSlider('')
                        }
                    >
                        {cards.items.map((item: cardsProps, index: number) => (
                            <SwiperSlide key={index}>
                                {showNavigation && <SliderNavigation swiper={swiper} position={positionSlider} />}
                                <Card {...item} />
                            </SwiperSlide>
                        ))}
                    </SimpleSliderSwiper>
                </>
            ) : (
                <Card {...cards?.items[0]} />
            )}
        </Container>
    );
};

export default SimpleSlider;
