import React from 'react';
import { Container } from './SliderNavigation.styled';
import Swiper from 'swiper';
import Arrow from '@/icons/arrow.svg';

interface SliderNavigationProps {
    swiper?: Swiper;
    position?: string;
    className?: string;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({ swiper, position, className }) => {
    return (
        <Container className={className}>
            {/* Такое лучше сделать через styled.button и вместо classNames прокидывать props */}
            <div
                className={`swiper-button prev ${position === 'beginning' && !swiper?.loopedSlides ? 'disabled' : ''}`}
                onClick={() => swiper?.slidePrev()}
            >
                <Arrow />
            </div>
            <div
                className={`swiper-button next ${position === 'end' && !swiper?.loopedSlides ? 'disabled' : ''}`}
                onClick={() => swiper?.slideNext()}
            >
                <Arrow />
            </div>
        </Container>
    );
};

export default SliderNavigation;
