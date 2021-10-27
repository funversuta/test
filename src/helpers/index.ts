
/**
 * @returns Поддержка touch-управления на устройстве
 */
export const isTouchDevice = (): boolean => {
    return !!('ontouchstart' in window || navigator.maxTouchPoints)
}