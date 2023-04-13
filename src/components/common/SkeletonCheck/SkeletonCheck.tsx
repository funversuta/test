import React, { useCallback } from 'react';
import { Container } from './SkeletonCheck.styled';
import { BaseUI } from '@/interfaces';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export interface SkeletonCheckProps extends BaseUI {
    isDataLoad?: boolean;
}

const SkeletonCheck: React.FC<SkeletonCheckProps> = (props) => {
    const SkeletonProductLib = () => {
        return (
            <SkeletonTheme height={24} width={'100%'}>
                <div style={{ width: '100%' }}>
                    <Skeleton height={'24'} width={`100%`} />
                </div>
            </SkeletonTheme>
        );
    };

    const generateSkeleton = useCallback((): React.ReactElement => {
        return <SkeletonProductLib />;
    }, [props.children]);

    const children = props.isDataLoad === false ? generateSkeleton() : props.children;

    return <Container className={props.className}>{children}</Container>;
};

export default SkeletonCheck;
