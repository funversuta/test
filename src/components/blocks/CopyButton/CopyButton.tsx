import React, { MutableRefObject, useRef } from 'react';
import { Container } from './CopyButton.styled';
import { SvgElements } from '@/helpers/icons';
import { Input } from '../ThemeControl/ThemeControl.styled';

interface CopyButtonProps {
    value?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ value = '' }) => {
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

    function myFunction() {
        const copyText = inputRef.current;

        copyText.select();

        navigator.clipboard.writeText(value);
    }

    return (
        <Container onClick={myFunction}>
            <Input type="text" ref={inputRef} />
            {SvgElements['svgButton']}
        </Container>
    );
};

export default CopyButton;
