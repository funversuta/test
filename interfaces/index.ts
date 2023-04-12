import { HeaderProps } from '@/components/common/Header/Header';
import { SandwichProps } from '@/components/common/Sandwich/Sandwich';
import React from 'react';

export type DeviceTypes = 'mobile' | 'tablet' | 'smallDesktop' | 'desktop';

/**
 * @description - Тип для мета-тегов на странице
 */
export interface MetaInfo {
    title: string;
    description?: string;
    keywords?: string;
}

/**
 * @description Базовый интерфейс с описанием полей, существующих на любой странице
 */
export interface BasePageProps {
    meta: MetaInfo;
    header: HeaderProps;
    sandwich: SandwichProps;
}

/**
 * @description Базовый интерфейс для компонентов, которые предполагают стилизацию с помощью styled-components
 */
export interface BaseUI {
    className?: string;
    children?: React.ReactNode;
}

export interface Theme {
    title?: string;
    color: {
        dark: string;
        light: string;
    };
}

export interface SliderProps {
    slider?: {
        items: [
            {
                title: string;
                description?: string;
                date: string;
                place: string;
                image: string;
            }
        ];
    };
}
export interface Wheather {
    now_dt: string;
    info: {
        url: string;
    };
    geo_object: {
        locality?: {
            id: number;
            name: string;
        };
    };
    fact: {
        temp: number;
        condition: string;
        feels_like: number;
    };
    forecasts: [
        {
            date: string;
            date_ts: number;
            parts: {
                evening: {
                    temp_avg: number;
                };
                night: {
                    temp_avg: number;
                };
                morning: {
                    temp_avg: number;
                };
            };
        }
    ];
}
