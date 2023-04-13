import React from 'react';
import { Container, MainContent, Title } from './SliderWithWidget.styled';
import SimpleSlider from '../../common/SimpleSlider/SimpleSlider';
import Widgets from '../../common/Widgets/Widgets';
import { SliderProps, Theme } from '@/interfaces';

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
        <Container options={{ target: 'top' }}>
            <Title>{content.title}</Title>
            <MainContent>
                <SimpleSlider cards={content.slider} showNavigation={true} />
                <Widgets theme={content.theme} toggleTheme={toggleTheme} />
            </MainContent>
        </Container>
    );
};

export default SliderWithWidget;
