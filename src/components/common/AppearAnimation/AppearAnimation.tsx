import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Container } from './AppearAnimation.styled';
import EaseFunction = gsap.EaseFunction;
import { BaseUI } from '@/interfaces';
import { gsap } from 'gsap';

export interface AppearAnimationProps extends BaseUI {
    options?: {
        rootMargin?: string;
        threshold?: number | number[];
        animateThreshold?: number;
        intersection?: boolean;
        initialVisibility?: boolean;
        duration?: number;
        easing?: string | EaseFunction;
        delay?: number;
        target?: TargetAnimation;
    };
    mode?: AppearAnimationModes;
}

// TODO: Как-то не очень понятно получилось, надо подправить
export type AppearAnimationModes = 'auto' | 'play' | 'reverse';
export type TargetAnimation = 'top' | 'bottom';
type DefaultOptions = NonNullable<Required<AppearAnimationProps['options']>>;

const defaultOption: DefaultOptions = {
    rootMargin: '10px',
    threshold: [0, 1],
    animateThreshold: 0,
    intersection: true,
    initialVisibility: false,
    duration: 0.6,
    easing: 'ease',
    delay: 0.1,
    target: 'bottom'
};

/**
 * @description Базовая анимация появления элементов.
 * Дочерние компоненты появятся при вхождении элемента в область видимости
 * Возможно ручное управление анимацией с помощью изменения mode
 */
const AppearAnimation: React.FC<AppearAnimationProps> = (props) => {
    const [tween, setTween] = useState<gsap.core.Tween>();
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const options = { ...defaultOption, ...props.options };

    const generateChildren = useCallback((): React.ReactElement => {
        return React.createElement('div', { dangerouslySetInnerHTML: { __html: props.children } });
    }, [props.children]);

    const children = typeof props.children === 'string' ? generateChildren() : props.children;

    useEffect(() => {
        gsap.set(ref.current.children, { y: options.initialVisibility ? 0 : options.target === 'bottom' ? '100%' : '-100%' });
    }, []);

    useEffect(() => {
        setTween(
            gsap.to(ref.current.children, {
                y: props.mode !== 'reverse' ? 0 : '100%',
                ease: options.easing,
                duration: options.duration,
                delay: options.delay,
                paused: true
            })
        );
    }, [props.options, props.mode]);

    useEffect(() => {
        if (['play', 'reverse'].includes(props.mode ?? 'auto')) tween?.play();
    }, [tween, props.mode]);

    useEffect(() => {
        if (!options.intersection || !tween) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(({ intersectionRatio }) => {
                    if (intersectionRatio > options.animateThreshold) {
                        observer.disconnect();
                        tween.play();
                    }
                });
            },
            {
                rootMargin: options.rootMargin,
                threshold: options.threshold
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [options.intersection, tween]);

    return (
        <Container ref={ref} className={props.className}>
            {children}
        </Container>
    );
};

export default AppearAnimation;
