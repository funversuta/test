import { useRef, DependencyList, useEffect, useState } from 'react';
import ScrollBar from 'smooth-scrollbar';

type Direction = 'up' | 'down';
type Data2D = { x: number; y: number };
type ScrollRoot = Window | HTMLElement | ScrollBar | null;

declare const UNDEFINED_VOID_ONLY: unique symbol;
type Effect = ({
    position,
    direction
}: {
    position: Data2D;
    direction: Direction;
}) => void | (() => void) | { [UNDEFINED_VOID_ONLY]: never };
type UseScrollPositionProps = (effect: Effect, deps?: DependencyList, root?: ScrollRoot) => void;

const getScrollPosition = (scrollRoot: ScrollRoot): Data2D => {
    if (!scrollRoot) return { x: 0, y: 0 };

    if ('scrollY' in scrollRoot) {
        return { x: scrollRoot.scrollX, y: scrollRoot.scrollY };
    }

    if ('scrollTop' in scrollRoot) {
        return { x: scrollRoot.scrollLeft, y: scrollRoot.scrollTop };
    }

    return {
        x: (<ScrollBar>scrollRoot).offset.x,
        y: (<ScrollBar>scrollRoot).offset.y
    };
};

const getDirection = (position: Data2D, prevPosition: Data2D): Direction => {
    return position.y - prevPosition.y > 0 ? 'down' : 'up';
};

/**
 *  @description Добавление события на скролл
 *  @param effect - Функция, которая будет срабатывать на событие скролла
 *  @param deps - Массив зависимостей для обновления события (Всегда зависит от изменения scrollRoot)
 *  @param root - Контейнер внутри которого будет определяться позиция. По умолчанию - window
 *
 *  @example
 *  useScrollPosition(({position, direction}) => {
 *      // Action on scroll
 *  })
 */
const useScrollPosition: UseScrollPositionProps = (effect, deps = [], root = null) => {
    const [scrollRoot, setScrollRoot] = useState<ScrollRoot>(root);
    const prevPosition = useRef(getScrollPosition(scrollRoot));

    const callBack = () => {
        const position = getScrollPosition(scrollRoot);
        const direction = getDirection(position, prevPosition.current);
        effect({ position, direction });
        prevPosition.current = position;
    };

    useEffect(() => {
        setScrollRoot(scrollRoot || window);
    }, []);

    useEffect(() => {
        if (!scrollRoot) return;

        const handleScroll = () => {
            callBack();
        };

        if ('addListener' in scrollRoot) {
            scrollRoot.addListener(handleScroll);
        } else {
            scrollRoot.addEventListener('scroll', handleScroll);
        }

        return () => {
            if ('removeListener' in scrollRoot) {
                scrollRoot.removeListener(handleScroll);
            } else {
                scrollRoot.removeEventListener('scroll', handleScroll);
            }
        };
    }, [scrollRoot, ...deps]);
};

export default useScrollPosition;
