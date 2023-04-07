import SvgButton from '@/icons/svgButton.svg';
import Vector from '@/icons/Vector.svg';
import Cloud from '@/icons/cloud.svg';
import Rainy from '@/icons/rainy.svg';
import Arrow from '@/icons/arrow.svg';

export const SvgElements: { [key in string]: JSX.Element } = {
    svgButton: <SvgButton />,
    vector: <Vector />,
    cloud: <Cloud />,
    rainy: <Rainy />,
    arrow: <Arrow />
};
