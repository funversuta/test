import React, { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from 'react';
import { Container } from './ParallaxWrapper.styled';
import { gsap } from 'gsap';
import { BaseUI } from '@/interfaces';
import useIsMobile from '@/hooks/useIsMobile';

export interface ParallaxWrapperProps extends BaseUI {
    options?: ScrollTrigger.Vars;
    debug?: boolean;
}

type ParallaxContextType = gsap.core.Timeline | null;

const ParallaxContext = createContext<ParallaxContextType>(null);
export const useParallax = () => useContext(ParallaxContext);

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ className, children, debug }) => {
    const [trigger, setTrigger] = useState<ParallaxContextType>(null);
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isMobile) return;

        setTrigger(
            gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 100%',
                    end: 'bottom 100%',
                    scrub: true,
                    markers: debug
                }
            })
        );

        return () => {
            trigger?.restart();
            trigger?.kill();
        };
    }, [isMobile]);

    return (
        <ParallaxContext.Provider value={trigger}>
            <Container className={className} ref={ref}>
                {children}
            </Container>
        </ParallaxContext.Provider>
    );
};

export default ParallaxWrapper;
