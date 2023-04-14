import React from 'react';
import { Button, Container } from './SliderNavigation.styled';
import Swiper from 'swiper';
import Arrow from '@/icons/arrow.svg';

interface SliderNavigationProps {
    swiper?: Swiper;
    position?: string;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({ swiper, position }) => {
    return (
        <Container>
            {/* Такое лучше сделать через styled.button и вместо classNames прокидывать props */}
            <Button Reverse isOver={position === 'beginning' && !swiper?.loopedSlides ? true : false} onClick={() => swiper?.slidePrev()}>
                <Arrow />
            </Button>
            <Button isOver={position === 'end' && !swiper?.loopedSlides ? true : false} onClick={() => swiper?.slideNext()}>
                <Arrow />
            </Button>
        </Container>
    );
};

export default SliderNavigation;
