import { allBreakpointValue, color, font, mediaBreakpointUp } from '@/style/mixins';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { Container as Card, CardImage, DescriptionWrapper, Point, TextCardWrapper, TitleCard } from '../../blocks/Card/Card.styled';
import { Container as CopyButton } from '../../blocks/CopyButton/CopyButton.styled';

export const Container = styled.div`
    position: relative;
    width: 100%;
    ${mediaBreakpointUp('md')} {
        width: 74.4%;
    }

    .swiper {
        border-radius: 16px;
        background: transparent;
    }

    ${CopyButton} {
        background: ${color('white', 0.15)};
        ${allBreakpointValue('inset', 40, 28, 28, 20, 12)};
        ${allBreakpointValue('width', 60, 40, 40, 36, 36)};
        ${allBreakpointValue('height', 60, 40, 40, 36, 36)};

        svg {
            padding-top: 3px;
            width: 17px;
            height: 17px;
        }

        ${mediaBreakpointUp('xl')} {
            padding: 0;

            svg {
                padding-top: 2px;
                width: 19px;
                height: 19px;
            }
        }

        ${mediaBreakpointUp('fhd')} {
            padding: 0;

            svg {
                padding-top: 2px;
                width: 28px;
                height: 28px;
            }
        }
    }

    ${Card} {
        width: 100%;
        position: relative;
        ${allBreakpointValue('height', 560, 405, 380, 360, 360)};
        ${allBreakpointValue('padding', 40, 28, 28, 20, 12)};

        ${CardImage} {
            height: 100%;
            width: 100%;
            position: absolute;
        }

        ${TextCardWrapper} {
            ${allBreakpointValue('bottom', 40, 28, 28, 20, 12)};
            position: absolute;
            ${allBreakpointValue('max-width', 578, 450, 450, 385, 311)};

            ${TitleCard} {
                color: ${color('white')};
                ${allBreakpointValue('margin-bottom', 20, 12, 12, 8, 8)};
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
