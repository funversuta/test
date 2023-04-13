import React from 'react';
import { Container, MainContent, Title } from './SliderWithWidget.styled';
import SimpleSlider from '../SimpleSlider/SimpleSlider';
import Widgets from '../Widgets/Widgets';
import { SliderProps, Theme } from '@/interfaces';
import AppearAnimation from '../AppearAnimation/AppearAnimation';

interface SliderWithWidgetProps {
    content: {
        title?: string;
        slider: SliderProps;
        theme: Theme;
    };
    toggleTheme: () => void;
}

const SliderWithWidget: React.FC<SliderWithWidgetProps> = ({ content, toggleTheme }) => {
    return (
        <Container>
            <Title>{content.title}</Title>
            <MainContent>
                <SimpleSlider cards={content.slider} showNavigation={true} />
                <AppearAnimation options={{ target: 'top' }}>
                    <Widgets theme={content.theme} toggleTheme={toggleTheme} />
                </AppearAnimation>
            </MainContent>
        </Container>
    );
};

export default SliderWithWidget;
