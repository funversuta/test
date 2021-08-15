import {useRef, useLayoutEffect, MutableRefObject, DependencyList} from 'react'
import ScrollBar from "smooth-scrollbar";

const isBrowser = typeof window !== `undefined`

const getScrollPosition = ({element, scrollRoot}: { element?: MutableRefObject<HTMLElement>, scrollRoot: Window | ScrollBar }) => {
    if (!isBrowser) return {x: 0, y: 0}

    const target = element ? element.current : document.body
    const position = target.getBoundingClientRect()

    return scrollRoot === window
        ? {x: window.scrollX, y: window.scrollY}
        : {x: position.left, y: position.top}
}

declare const UNDEFINED_VOID_ONLY: unique symbol;
type Effect = ({prevPos, currPos}: { prevPos: {x: number, y: number}, currPos: {x: number, y: number}}) => (void | (() => void) | { [UNDEFINED_VOID_ONLY]: never })
type UseScrollPositionProps = (effect: Effect, deps: DependencyList, element: MutableRefObject<HTMLElement>, scrollRoot: Window | ScrollBar, delay?: number) => void

/**
 *  @description Набросок хука для определении позиции скрола.
 *  Пока написан только под нативный скролл
 *
 *  Не протестирован
 *
 *  @link https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
 */

const useScrollPosition: UseScrollPositionProps = (effect, deps = [], element, scrollRoot = window, delay = 0) => {
    const position = useRef(getScrollPosition({scrollRoot}))

    let throttleTimeout: NodeJS.Timeout | null = null

    const callBack = () => {
        const currPos = getScrollPosition({element, scrollRoot})
        effect({prevPos: position.current, currPos})
        position.current = currPos
        throttleTimeout = null
    }

    useLayoutEffect(() => {
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
            scrollRoot.addEventListener('scroll', handleScroll)
        } else {
            (scrollRoot as ScrollBar).addListener(handleScroll)
        }

        return () => {
            if (scrollRoot === window) {
                scrollRoot.removeEventListener('scroll', handleScroll)
            } else {
                (scrollRoot as ScrollBar).removeListener(handleScroll)
            }
        }
    }, deps)
}

export default useScrollPosition;