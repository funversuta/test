import React, { useState, useEffect } from 'react';
import { Container, Input, SliderRound, Switch, ThemeWrapper, Title, ValueColor } from './ThemeControl.styled';

interface ThemeControlProps {
    title?: string;
    color: {
        light: string;
        dark: string;
    };
    toggleTheme: () => void;
}

const ThemeControl: React.FC<ThemeControlProps> = ({ title, color, toggleTheme }) => {
    const [currentColor, setCurrentColor] = useState(color?.light);

    useEffect(() => {
        const item = localStorage.getItem('isDarkTheme');
        const radioButton = document.getElementById('radioButton') as HTMLInputElement;
        if (item && item === 'true') {
            setCurrentColor(color?.dark);
            radioButton.checked = true;
            toggleTheme();
        }
    }, []);

    function myFunction() {
        const radioButton = document.getElementById('radioButton') as HTMLInputElement;

        if (radioButton.value === color?.light) {
            setCurrentColor(color?.dark);
            localStorage.setItem('isDarkTheme', 'true');
        } else {
            setCurrentColor(color?.light);
            localStorage.setItem('isDarkTheme', 'false');
        }
        toggleTheme();
    }

    return (
        <Container>
            <Title>{title}</Title>
            <ThemeWrapper>
                <ValueColor>{currentColor}</ValueColor>
                <Switch>
                    <Input id="radioButton" value={currentColor} onChange={myFunction} />
                    <SliderRound></SliderRound>
                </Switch>
            </ThemeWrapper>
        </Container>
    );
};

export default ThemeControl;
