import React from 'react';
import { Container, MainContent, Title } from './SliderWithWidget.styled';
import SimpleSlider from '../SimpleSlider/SimpleSlider';
import WidgetWeather from '../WidgetWeather/WidgetWeather';

interface SliderWithWidgetProps {
    content: {
        title?: any;
        slider?: any;
        theme?: any;
    };
}

const SliderWithWidget: React.FC<SliderWithWidgetProps> = ({ content }) => {
    return (
        <Container>
            {console.log(content)}
            <Title>{content.title}</Title>
            <MainContent>
                <SimpleSlider cards={content.slider} showNavigation={true} />
                <WidgetWeather theme={content.theme} />
            </MainContent>
        </Container>
    );
};

export default SliderWithWidget;
