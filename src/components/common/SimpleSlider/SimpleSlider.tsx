import React, { useState } from 'react';
import { Container, SimpleSliderSwiper } from './SimpleSlider.styled';
import Card from '../Card/Card';
import SwiperCore, { Controller, Keyboard, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import SliderNavigation from '../SliderNavigation/SliderNavigation';

interface SimpleSliderProps {
    cards?: any;
    showNavigation?: boolean;
    onSwiper?: (swiper: SwiperCore) => void;
}

SwiperCore.use([Controller, Keyboard, Autoplay]);

const SimpleSlider: React.FC<SimpleSliderProps> = ({ cards, showNavigation }) => {
    const [swiper, setSwiper] = useState<SwiperCore>();
    const [positionSlider /* , setPositionSlider */] = useState('beginning');

    const swiperOptions = {
        allowTouchMove: true,
        grabCursor: true,
        keyboard: false,
        autoplay: false /* {
            delay: 3000,
            disableOnInteraction: false
        } */,
        loop: true,
        spaceBetween: 8
    };

    return (
        <Container>
            <SimpleSliderSwiper onSwiper={setSwiper} {...swiperOptions}>
                {cards?.items?.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        {showNavigation && <SliderNavigation swiper={swiper} position={positionSlider} />}
                        <Card {...item} />
                    </SwiperSlide>
                ))}
            </SimpleSliderSwiper>
        </Container>
    );
};

export default SimpleSlider;
