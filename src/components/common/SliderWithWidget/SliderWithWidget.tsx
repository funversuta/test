import React from 'react';
import { Container, MainContent, Title } from './SliderWithWidget.styled';
import SimpleSlider from '../SimpleSlider/SimpleSlider';
import Widgets from '../Widgets/Widgets';

interface SliderWithWidgetProps {
    content: {
        title?: string;
        slider?: any;
        theme?: any;
    };
}

const SliderWithWidget: React.FC<SliderWithWidgetProps> = ({ content }) => {
    return (
        <Container>
            <Title>{content.title}</Title>
            <MainContent>
                <SimpleSlider cards={content.slider} showNavigation={true} />
                <Widgets theme={content.theme} />
            </MainContent>
        </Container>
    );
};

export default SliderWithWidget;
