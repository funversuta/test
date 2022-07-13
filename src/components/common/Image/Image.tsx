import React, { memo } from 'react';
import { default as NextImage, ImageProps as NextImageProps, StaticImageData } from 'next/image';
import BasePlaceholder from '/public/images/placeholder.jpeg';
import { Container } from './Image.styled';
import { BaseUI } from '@/interfaces';

type ImageProps = Omit<NextImageProps, 'src'> & { src?: string | StaticImageData | null };

const defaultOption: NextImageProps = {
    src: BasePlaceholder,
    quality: 100,
    lazyBoundary: '500px',
    placeholder: 'blur',
    blurDataURL: BasePlaceholder.blurDataURL
};

const Image: React.FC<ImageProps & BaseUI> = (props) => {
    const options = {
        ...defaultOption,
        ...props,
        src: props.src ?? defaultOption.src
    };

    return (
        <Container className={props.className}>
            <NextImage {...options} />
        </Container>
    );
};

export default memo(Image);
