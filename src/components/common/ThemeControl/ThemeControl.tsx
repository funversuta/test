import React, { useState, useContext, useEffect } from 'react';
import { Container, ThemeWrapper, ValueColor } from './ThemeControl.styled';
import MyThemeContext from '../ThemContext/ThemContext';

interface ThemeControlProps {
    title?: string;
    color: {
        light: string;
        dark: string;
    };
    func?: any;
}

const ThemeControl: React.FC<ThemeControlProps> = ({ title, color, func }) => {
    const [currentColor, setCurrentColor] = useState(color?.light);
    func(currentColor);
    const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext);

    useEffect(() => {
        const item = localStorage.getItem('default-theme');
        if (item) setCurrentColor(item);

        const radioButton = document.getElementById('radioButton') as HTMLInputElement;
        item === color?.light ? (radioButton.checked = false) : (radioButton.checked = true);
        localStorage.setItem('default-theme', currentColor === color?.dark ? color?.light : color?.dark);

        console.log(item, radioButton.checked, themeCtx.isDarkMode, localStorage);
    }, []);

    function myFunction() {
        const radioButton = document.getElementById('radioButton') as HTMLInputElement;

        radioButton.value === color?.light ? setCurrentColor(color?.dark) : setCurrentColor(color?.light);
        localStorage.setItem('default-theme', currentColor === color?.dark ? color?.light : color?.dark);

        themeCtx.toggleThemeHandler();
    }

    return (
        <Container>
            {title}
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
