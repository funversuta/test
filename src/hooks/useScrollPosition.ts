import {useRef, MutableRefObject, DependencyList, useEffect} from 'react'
import ScrollBar from "smooth-scrollbar";

const getScrollPosition = ({scrollRoot}: { element?: MutableRefObject<HTMLElement>, scrollRoot: Window | ScrollBar | null }) => {
    if (!scrollRoot) return {x: 0, y: 0}

    return scrollRoot === window
        ? {x: window.scrollX, y: window.scrollY}
        : {x: (<ScrollBar>scrollRoot).offset.x, y: (<ScrollBar>scrollRoot).offset.y}
}

declare const UNDEFINED_VOID_ONLY: unique symbol;
type Effect = ({position, prevPosition}: { position: {x: number, y: number}, prevPosition: {x: number, y: number}}) => (void | (() => void) | { [UNDEFINED_VOID_ONLY]: never })
type UseScrollPositionProps = (effect: Effect, scrollRoot: Window | ScrollBar | null, deps: DependencyList, element: MutableRefObject<HTMLElement>, delay?: number) => void

/**
 *  @description Добавление события на скролл (плавный или нативный). Хук надо протестить
 *  @param effect - Функция, которая будет срабатывать на событие скролла
 *  @param scrollRoot - Нативный или кастомный скролл внутри которого будет определяться позиция ()
 *  @param deps - Массив зависимостей для обновления события (Всегда зависит от изменения scrollRoot)
 *  @param element - Ref элемента относительно которого может идти расчёт позиции. (Возможно, не потребуется)
 *  @param delay - Задержка перед вызовом события скролла. (Возможно, не потребуется)
 *
 *  @example
 *  useScrollPosition(({position, prevPosition}) => {
 *      // Action on scroll
 *  }, scrollbar)
 */
const useScrollPosition: UseScrollPositionProps = (effect, scrollRoot = window, deps = [], element, delay = 0) => {
    const prevPosition = useRef(getScrollPosition({scrollRoot}))

    let throttleTimeout: NodeJS.Timeout | null = null

    const callBack = () => {
        const position = getScrollPosition({element, scrollRoot})
        effect({position, prevPosition: prevPosition.current})
        prevPosition.current = position
        throttleTimeout = null
    }

    useEffect(() => {
        if (!scrollRoot) return;

        const handleScroll = () => {
            if (!!delay) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callBack, delay)
                }
            } else {
                callBack()
            }
        }


        if (scrollRoot === window) {
            scrollRoot!.addEventListener('scroll', handleScroll)
        } else {

            (<ScrollBar>scrollRoot).addListener(handleScroll);
        }

        return () => {
            if (scrollRoot === window) {
                scrollRoot!.removeEventListener('scroll', handleScroll)
            } else {
                (<ScrollBar>scrollRoot).removeListener(handleScroll)
            }
        }
    }, [scrollRoot, ...deps])
}

export default useScrollPosition;