import {useRef, useLayoutEffect, MutableRefObject, DependencyList} from 'react'

const isBrowser = typeof window !== `undefined`

const getScrollPosition = ({element, useWindow}: { element?: MutableRefObject<HTMLElement>, useWindow: boolean }) => {
    if (!isBrowser) return {x: 0, y: 0}

    const target = element ? element.current : document.body
    const position = target.getBoundingClientRect()

    return useWindow
        ? {x: window.scrollX, y: window.scrollY}
        : {x: position.left, y: position.top}
}

declare const UNDEFINED_VOID_ONLY: unique symbol;
type Effect = ({prevPos, currPos}: { prevPos: {x: number, y: number}, currPos: {x: number, y: number}}) => (void | (() => void) | { [UNDEFINED_VOID_ONLY]: never })


/**
 *  @description Набросок хука для определении позиции скрола.
 *  Пока написан только под нативный скролл
 *
 *  Не протестирован
 *
 *  @link https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
 */

const useScrollPosition = (effect: Effect, deps: DependencyList = [], element?: MutableRefObject<HTMLElement>, useWindow: boolean = false, delay: number = 0) => {
    const position = useRef(getScrollPosition({useWindow}))

    let throttleTimeout: NodeJS.Timeout | null = null

    const callBack = () => {
        const currPos = getScrollPosition({element, useWindow})
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

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, deps)
}

export default useScrollPosition;