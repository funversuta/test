import React, { useState, useEffect, MutableRefObject, useRef } from 'react';
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
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        const item = localStorage.getItem('isDarkTheme');
        const radioButton = inputRef.current;
        if (item && item === 'true') {
            setCurrentColor(color?.dark);
            radioButton.checked = true;
            toggleTheme();
        }
    }, []);

    function myFunction() {
        const radioButton = inputRef.current;

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
                    <Input ref={inputRef} value={currentColor} onChange={myFunction} />
                    <SliderRound></SliderRound>
                </Switch>
            </ThemeWrapper>
        </Container>
    );
};

export default ThemeControl;
