import React from 'react';
import { Container } from './WidgetWeather.styled';
import ThemeControl from '../ThemeControl/ThemeControl';

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
    const pull_data = (data: any) => {
        console.log(data);
    };
    return (
        <Container>
            <div>Тут будет блок с погодой</div>
            {theme?.color && <ThemeControl color={theme.color} func={pull_data} />}
        </Container>
    );
};

export default WidgetWeather;
