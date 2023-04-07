import React from 'react';
import { Container } from './Widgets.styled';
import ThemeControl from '../ThemeControl/ThemeControl';
import WidgetWeather from '../WidgetWeather/WidgetWeather';

interface WidgetsProps {
    theme?: {
        title?: string;
        color: {
            light: string;
            dark: string;
        };
    };
}

const Widgets: React.FC<WidgetsProps> = ({ theme }) => {
    return (
        <Container>
            <WidgetWeather />
            {theme?.color && <ThemeControl color={theme.color} title={theme.title} />}
        </Container>
    );
};

export default Widgets;
