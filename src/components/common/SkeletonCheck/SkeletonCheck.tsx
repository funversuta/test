import React from 'react';
import { Container, Columns, Element, Neck, Row, Circle, RowCenter, Line, Column, HalfRow } from './SkeletonCheck.styled';
import { BaseUI } from '@/interfaces';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export interface SkeletonCheckProps extends BaseUI {
    isDataLoad?: boolean;
    error?: boolean;
}

const SkeletonCheck: React.FC<SkeletonCheckProps> = (props) => {
    const SkeletonProductLib = () => {
        return (
            <SkeletonTheme height={'100%'} width={'100%'}>
                <div>
                    <Element>
                        <Skeleton height={14} width={`100%`} />
                    </Element>
                    <Neck>
                        <Skeleton height={14} width={`100%`} />
                    </Neck>
                </div>
                <Row>
                    <HalfRow>
                        <Skeleton height={50} width={`100%`} />
                    </HalfRow>
                    <Column>
                        <div>
                            <Skeleton height={20} width={`100%`} />
                        </div>
                        <div>
                            <Skeleton height={20} width={`100%`} />
                        </div>
                    </Column>
                </Row>
                <Row>
                    <Columns>
                        <Element>
                            <Skeleton height={10} width={`100%`} />
                        </Element>
                        <RowCenter>
                            <Circle>
                                <Skeleton height={16} width={`100%`} />
                            </Circle>
                            <Line>
                                <Skeleton height={10} width={`100%`} />
                            </Line>
                        </RowCenter>
                    </Columns>
                    <Columns>
                        <Element>
                            <Skeleton height={10} width={`100%`} />
                        </Element>
                        <RowCenter>
                            <Circle>
                                <Skeleton height={16} width={`100%`} />
                            </Circle>
                            <Line>
                                <Skeleton height={10} width={`100%`} />
                            </Line>
                        </RowCenter>
                    </Columns>
                    <Columns>
                        <Element>
                            <Skeleton height={10} width={`100%`} />
                        </Element>
                        <RowCenter>
                            <Circle>
                                <Skeleton height={16} width={`100%`} />
                            </Circle>
                            <Line>
                                <Skeleton height={10} width={`100%`} />
                            </Line>
                        </RowCenter>
                    </Columns>
                </Row>
            </SkeletonTheme>
        );
    };

    const generateSkeleton = (error?: boolean) => {
        return error ? <p>Упс, что-то пошло не так</p> : <SkeletonProductLib />;
    };

    const children =
        props.isDataLoad === false && props.error === true
            ? generateSkeleton(props.error)
            : props.isDataLoad === false
            ? generateSkeleton()
            : props.children;

    return <Container className={props.className}>{children}</Container>;
};

export default SkeletonCheck;
