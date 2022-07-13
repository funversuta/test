import React, { MutableRefObject, useEffect, useRef } from 'react';
import { Container } from './ParallaxElement.styled';
import { useParallax } from '@/components/common/ParallaxWrapper/ParallaxWrapper';
import { BaseUI } from '@/interfaces';
import TweenVars = gsap.TweenVars;
import useIsMobile from '@/hooks/useIsMobile';

export interface ParallaxElementProps extends BaseUI {
    options?: ParallaxOptions;
}

export type ParallaxOptions = {
    from?: TweenVars;
    to?: TweenVars;
};

const defaultOptions: Required<ParallaxOptions> = {
    from: {},
    to: {}
};

const ParallaxElement: React.FC<ParallaxElementProps> = (props) => {
    const parallax = useParallax();
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const isMobile = useIsMobile();

    useEffect(() => {
        if (!parallax) return;

        const from = props.options?.from ?? defaultOptions.from;
        const to = props.options?.to ?? defaultOptions.to;

        parallax.fromTo(ref.current, from, to, 0);
    }, [parallax]);

    useEffect(() => {
        if (!isMobile || !ref.current) return;

        ref.current.style.removeProperty('transform');
    }, [isMobile]);

    return (
        <Container ref={ref} className={props.className}>
            {props.children}
        </Container>
    );
};

export default ParallaxElement;
