import React from 'react';
import { Container, Text, Numbers, PercentIcon, MyLink, Description } from './Element.styled';
import { SvgElements } from '@/helpers/icons';
import Link from 'next/dist/client/link';

interface ElementProps {
    text?: string;
    temp?: number;
    weatherIcon?: 'vector' | 'cloud' | 'rainy' | 'none';
    link?: {
        text?: string;
        href?: string;
    };
    description?: string;
    noNeedTemp?: boolean;
}

const Element: React.FC<ElementProps> = ({ text, temp, weatherIcon, link, description, noNeedTemp }) => {
    return (
        <Container>
            {text && <Text>{text}</Text>}

            {SvgElements[weatherIcon ? weatherIcon : 'cloud']}

            {description && (
                <Description>
                    {description}
                    {link && (
                        <Link href={link.href ?? ''} passHref>
                            <MyLink target="_blank">{link.text}</MyLink>
                        </Link>
                    )}
                </Description>
            )}
            {!noNeedTemp && (
                <Numbers>
                    +{temp}
                    <PercentIcon />
                </Numbers>
            )}
        </Container>
    );
};

export default Element;
