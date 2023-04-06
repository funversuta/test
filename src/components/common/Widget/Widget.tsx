import React, { useEffect, useState } from 'react';
import { Container, Title, Top, Middle, Bottom, Element, Text, Numbers, Number, Condition, ActualDate } from './Widget.styled';
import { SvgElements } from '@/helpers/icons';
import { getWeather } from '@/lib/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Wheather } from '@/interfaces';

export default function Widget() {
    const [Weather, setWeather] = useState<null | Wheather>(null);
    const [date, setDate] = useState<null | string>(null);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;

    useEffect(() => {
        /* const timer = setTimeout(() => { */
        const fetchData = async () => {
            const data = await getWeather({ lat: 43.5992, lon: 39.7257, lang: 'ru_RU' });
            if (data) setWeather(data.data);
            if (Weather?.now_dt) {
                const event = new Date(Weather?.now_dt);
                setDate(event?.toLocaleDateString('ru-RU', options));
            }
            console.log(Weather);
        };

        fetchData().catch(console.error);
        /* }, 30); */

        /* return () => {
            clearTimeout(timer)
        } */
    }, [Weather == null]);

    return (
        <Container>
            <Top>
                {Weather != null ? (
                    <>
                        {SvgElements['vector']} <Title>Погода в {Weather?.geo_object?.locality?.name}</Title>
                    </>
                ) : (
                    <Skeleton />
                )}
            </Top>
            <ActualDate>{(Weather != null && date) || <Skeleton />}</ActualDate>
            <Middle>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {Weather?.fact?.temp ? (
                        <>
                            {SvgElements['rainy']}{' '}
                            <Number>
                                {'+' + Weather?.fact?.temp}
                                <p className="percent"></p>
                            </Number>
                        </>
                    ) : (
                        <Skeleton />
                    )}
                </div>
                <p>{(Weather != null && Weather?.fact.condition) || <Skeleton />}</p>
                <div>
                    {Weather?.fact?.feels_like ? (
                        <>
                            Ощущается как: +
                            <Condition>
                                {Weather?.fact?.feels_like}
                                <p className="percent"></p>
                            </Condition>
                        </>
                    ) : (
                        <Skeleton />
                    )}
                </div>
            </Middle>
            <Bottom>
                {Weather?.forecasts[0]?.parts ? (
                    <>
                        <Element>
                            <Text>Вечером</Text>
                            {SvgElements['cloud']}
                            <Numbers>
                                {'+' + Weather?.forecasts[0]?.parts?.evening?.temp_avg || <Skeleton />}
                                <p className="percent"></p>
                            </Numbers>
                        </Element>
                        <Element>
                            <Text>Ночью</Text>
                            {SvgElements['cloud']}
                            <Numbers>
                                {'+' + Weather?.forecasts[0]?.parts?.night?.temp_avg || <Skeleton />} <p className="percent"></p>
                            </Numbers>
                        </Element>
                        <Element>
                            <Text>Утром</Text>
                            {SvgElements['cloud']}
                            <Numbers>
                                {'+' + Weather?.forecasts[0]?.parts?.morning?.temp_avg || <Skeleton />} <p className="percent"></p>
                            </Numbers>
                        </Element>
                    </>
                ) : (
                    <Skeleton />
                )}
            </Bottom>
        </Container>
    );
}
