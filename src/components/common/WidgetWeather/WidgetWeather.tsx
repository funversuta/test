import React from 'react';
import { Container } from './WidgetWeather.styled';
import ThemeControl from '../ThemeControl/ThemeControl';

import Widget from '../Widget/Widget';

interface WidgetWeatherProps {
    theme?: {
        title?: string;
        color: {
            light: string;
            dark: string;
        };
    };
}

const WidgetWeather: React.FC<WidgetWeatherProps> = ({ theme }) => {
    return (
        <Container>
            <Widget />
            {theme?.color && <ThemeControl color={theme.color} title={theme.title} />}
        </Container>
    );
};

export default WidgetWeather;
