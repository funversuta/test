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
    const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext);

    useEffect(() => {
        const item = localStorage.getItem('default-theme');
        const radioButton = document.getElementById('radioButton') as HTMLInputElement;
        console.log(item);
        if (item) {
            setCurrentColor(item);
            item === color?.light ? (radioButton.checked = false) : (radioButton.checked = true);
            localStorage.setItem('default-theme', currentColor === color?.dark ? color?.light : color?.dark);
            console.log(item, localStorage);
        } else {
            localStorage.setItem('default-theme', color?.light);
            radioButton.checked = false;
        }
    }, []);

    function myFunction() {
        const radioButton = document.getElementById('radioButton') as HTMLInputElement;

        radioButton.value === color?.light ? setCurrentColor(color?.dark) : setCurrentColor(color?.light);
        localStorage.setItem('default-theme', currentColor === color?.dark ? color?.light : color?.dark);

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
