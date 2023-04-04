import { DeviceTypes } from '@/interfaces';

export const getDeviceType = (): DeviceTypes => {
    if (window.innerWidth <= 768) return 'mobile';
    if (window.innerWidth > 768 && window.innerWidth < 1200) return 'tablet';
    if (window.innerWidth >= 1200 && window.innerWidth < 1400) return 'smallDesktop';
    return 'desktop';
};

/**
 * @returns Возможность touch-управления на устройстве
 */
export const isTouchDevice = (): boolean => {
    return !!('ontouchstart' in window || navigator.maxTouchPoints);
};

export const baseParallax = (element: HTMLElement, offset: number, multiply: number = 0.1) => {
    if (window.innerWidth <= 1024) return;
    if (offset > element.offsetTop + element.offsetHeight || offset < element.offsetTop - window.innerHeight) return;
    const translateY = (offset - element.offsetTop) * multiply;
    element.style.transform = `translate3d(0, ${translateY}px, 0)`;
};
