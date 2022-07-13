import { useMediaQuery } from 'react-responsive';
import breakpoints from '@/style/breakpoints';

/**
 * @description Определение мобильного устройства по ширине экрана (Меньше 1024px = mobile)
 */
const useIsMobile = () => useMediaQuery({ maxWidth: breakpoints.lg - 1 });

export default useIsMobile;
