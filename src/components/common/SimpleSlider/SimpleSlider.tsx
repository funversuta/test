import React, { useState } from 'react';
import { Container, SimpleSliderSwiper } from './SimpleSlider.styled';
import Card from '../Card/Card';
import SwiperCore, { Controller, Keyboard, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import SliderNavigation from '../SliderNavigation/SliderNavigation';

interface SimpleSliderProps {
    // Слишком много типов any
    cards?: any;
    showNavigation?: boolean;
    onSwiper?: (swiper: SwiperCore) => void;
}

SwiperCore.use([Controller, Keyboard, Autoplay]);

const SimpleSlider: React.FC<SimpleSliderProps> = ({ cards, showNavigation }) => {
    const [swiper, setSwiper] = useState<SwiperCore>();

    const swiperOptions = {
        allowTouchMove: true,
        grabCursor: true,
        keyboard: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        loop: true,
        spaceBetween: 8
    };

    return (
        <Container>
            {cards?.items?.length > 1 ? (
                <>
                    <SimpleSliderSwiper onSwiper={setSwiper} {...swiperOptions}>
                        {cards?.items?.map((item: any, index: number) => (
                            <SwiperSlide key={index}>
                                {showNavigation && <SliderNavigation swiper={swiper} position={'beginning'} />}
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
