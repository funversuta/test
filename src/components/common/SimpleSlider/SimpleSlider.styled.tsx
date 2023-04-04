import { allBreakpointValue, color, font, vw } from '@/style/mixins';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { Container as Card, CardImage, DescriptionWrapper, Point, TextCardWrapper, TitleCard } from '../Card/Card.styled';
import { Container as CopyButton } from '../CopyButton/CopyButton.styled';

export const Container = styled.div`
    position: relative;
    width: 74.4%;

    ${CopyButton} {
        ${allBreakpointValue('inset', 40, 28, 28, 20, 12)};
        button {
            background: ${color('white', 0.15)};
        }
    }

    ${Card} {
        width: 100%;
        position: relative;
        height: ${vw(560, 'fhd')};

        ${CardImage} {
            height: 100%;
            width: 100%;
            position: absolute;
        }

        ${TextCardWrapper} {
            margin: ${vw(40, 'fhd')};
            bottom: 0;
            position: absolute;

            ${TitleCard} {
                color: ${color('white')};
                margin-bottom: ${vw(20, 'fhd')};
                ${font('font40')};
            }
            ${DescriptionWrapper} {
                color: ${color('white')};
                ${font('font18_2')};
            }

            ${Point} {
                background: ${color('white')};
            }
        }
    }
`;

export const SimpleSliderSwiper = styled(Swiper)`
    .swiper-slide {
        height: auto;
    }
`;
