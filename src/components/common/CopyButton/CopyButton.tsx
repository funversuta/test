import React from 'react';
import { Container } from './CopyButton.styled';
import { SvgElements } from '@/helpers/icons';

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
        <Container>
            <button onClick={myFunction} id="button">
                <input type="text" id="copyButton" />
                {SvgElements['svgButton']}
            </button>
        </Container>
    );
};

export default CopyButton;
