import { getAdaptiveFont } from './mixins'

const typography = {
    font14: getAdaptiveFont(12, 12, 14),
    font16: getAdaptiveFont(14, 14, 16),
    font20: getAdaptiveFont(16, 18, 20),
    font26: getAdaptiveFont(18, 22, 26),
    font35: getAdaptiveFont(20, 28, 35),
    font50: getAdaptiveFont(30, 40, 50),
    font56: getAdaptiveFont(32, 44, 56),
    font70: getAdaptiveFont(36, 50, 70),
    font200: getAdaptiveFont(40, 140, 200)
}

export default typography
