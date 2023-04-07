import React, { useState, useContext, useEffect } from 'react';
import { Container, ThemeWrapper, Title, ValueColor } from './ThemeControl.styled';
import MyThemeContext from '../ThemContext/ThemContext';

interface ThemeControlProps {
    title?: string;
    color: {
        light: string;
        dark: string;
    };
}

const ThemeControl: React.FC<ThemeControlProps> = ({ title, color }) => {
    const [currentColor, setCurrentColor] = useState(color?.light);
    const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext); //dlya css

    useEffect(() => {
        const item = localStorage.getItem('isDarkTheme');
        const radioButton = document.getElementById('radioButton') as HTMLInputElement;
        console.log(localStorage);
        if (item) {
            item === 'true' ? setCurrentColor(color?.dark) : setCurrentColor(color?.light);
            item === 'true' ? (radioButton.checked = true) : (radioButton.checked = false);
        } else {
            radioButton.checked = false;
            localStorage.setItem('isDarkTheme', 'false');
        }
    }, []);

    function myFunction() {
        const radioButton = document.getElementById('radioButton') as HTMLInputElement;

        radioButton.value === color?.light ? setCurrentColor(color?.dark) : setCurrentColor(color?.light);

        themeCtx.toggleThemeHandler();
    }

    return (
        <Container>
            <Title>{title}</Title>
            <ThemeWrapper>
                <ValueColor>{currentColor}</ValueColor>
                <label className="switch">
                    <input type="checkbox" id="radioButton" value={currentColor} onChange={myFunction} />
                    <span className="slider round"></span>
                </label>
            </ThemeWrapper>
        </Container>
    );
};

export default ThemeControl;
