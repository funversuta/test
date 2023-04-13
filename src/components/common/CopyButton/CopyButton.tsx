import React from 'react';
import { Container } from './CopyButton.styled';
import { SvgElements } from '@/helpers/icons';
import { Input } from '../ThemeControl/ThemeControl.styled';

interface CopyButtonProps {
    value?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ value = '' }) => {
    function myFunction() {
        const copyText = document.getElementById('copyButton') as HTMLInputElement;

        copyText.select();

        navigator.clipboard.writeText(value);
    }

    return (
        <Container onClick={myFunction} id="button">
            <Input type="text" id="copyButton" />
            {SvgElements['svgButton']}
        </Container>
    );
};

export default CopyButton;
