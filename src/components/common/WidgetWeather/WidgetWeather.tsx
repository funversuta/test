import React, { useEffect, useState } from 'react';
import {
    Container,
    Title,
    Top,
    Middle,
    Bottom,
    Element,
    Text,
    Numbers,
    Number,
    Condition,
    ActualDate,
    RregularText,
    Row,
    Row2
} from './WidgetWeather.styled';
import { SvgElements } from '@/helpers/icons';
import { getWeather } from '@/lib/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Wheather } from '@/interfaces';
import { dataFormat } from '@/helpers';
import useTranslation from '@/hooks/useTranslation';

interface WidgetProps {}

const Widget: React.FC<WidgetProps> = () => {
    const [Weather, setWeather] = useState<null | Wheather>(null);
    const [error, setError] = useState<boolean>(false);
    const [date, setDate] = useState<null | string>(null);
    const { t } = useTranslation('common');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getWeather({ lat: 43.5992, lon: 39.7257, lang: 'ru_RU' });
            if (data) setWeather(data.data);
            if (Weather?.now_dt) {
                const event = new Date(Weather?.now_dt);
                setDate(dataFormat(event));
            }
        };

        fetchData().catch(() => {
            console.error, setError(true); // "Uh-oh!"
        });
    }, [Weather == null]);

    return (
        <Container>
            {error ? (
                <p>Упс, что-то пошло не так</p>
            ) : (
                <>
                    <Top>
                        {Weather != null ? (
                            <>
                                {SvgElements['vector']}{' '}
                                <Title>
                                    {t(`Погода в`, { returnObjects: true }) + ' '}
                                    <a target="_blank" href={Weather.info.url ?? ''} rel="noreferrer">
                                        {Weather?.geo_object?.locality?.name}
                                    </a>
                                </Title>
                            </>
                        ) : (
                            <Skeleton />
                        )}
                    </Top>
                    <ActualDate>{(Weather != null && date) || <Skeleton />}</ActualDate>
                    <Middle>
                        <Row>
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
                        </Row>
                        <Row2>
                            <RregularText>
                                {(Weather != null && t(`wheather.${Weather?.fact.condition}`, { returnObjects: true })) || <Skeleton />}
                            </RregularText>
                            {Weather?.fact?.feels_like ? (
                                <RregularText>
                                    {t('wheather.feels_like', { returnObjects: true })}
                                    <Condition>
                                        {Weather?.fact?.feels_like}
                                        <p className="percent"></p>
                                    </Condition>
                                </RregularText>
                            ) : (
                                <Skeleton />
                            )}
                        </Row2>
                    </Middle>
                    <Bottom>
                        {Weather?.forecasts[0]?.parts ? (
                            <>
                                <Element>
                                    <Text>{t(`Вечером`, { returnObjects: true })}</Text>
                                    {SvgElements['cloud']}
                                    <Numbers>
                                        {Weather?.forecasts[0]?.parts?.evening?.temp_avg != undefined ? (
                                            <>
                                                +{Weather?.forecasts[0]?.parts?.evening?.temp_avg}
                                                <p className="percent"></p>
                                            </>
                                        ) : (
                                            <Skeleton />
                                        )}
                                    </Numbers>
                                </Element>
                                <Element>
                                    <Text>{t(`Ночью`, { returnObjects: true })}</Text>
                                    {SvgElements['cloud']}
                                    <Numbers>
                                        {Weather?.forecasts[0]?.parts?.night?.temp_avg != undefined ? (
                                            <>
                                                +{Weather?.forecasts[0]?.parts?.night?.temp_avg}
                                                <p className="percent"></p>
                                            </>
                                        ) : (
                                            <Skeleton />
                                        )}
                                    </Numbers>
                                </Element>
                                <Element>
                                    <Text>{t(`Утром`, { returnObjects: true })}</Text>
                                    {SvgElements['cloud']}
                                    <Numbers>
                                        {Weather?.forecasts[0]?.parts?.morning?.temp_avg != undefined ? (
                                            <>
                                                +{Weather?.forecasts[0]?.parts?.morning?.temp_avg}
                                                <p className="percent"></p>
                                            </>
                                        ) : (
                                            <Skeleton />
                                        )}
                                    </Numbers>
                                </Element>
                            </>
                        ) : (
                            <Skeleton />
                        )}
                    </Bottom>
                </>
            )}
        </Container>
    );
};

export default Widget;
