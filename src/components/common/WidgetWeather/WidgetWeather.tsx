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
    Row2,
    MyLink,
    PercentIcon
} from './WidgetWeather.styled';
import { SvgElements } from '@/helpers/icons';
import { getWeatherFetch } from '@/lib/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Wheather } from '@/interfaces';
import { dataFormat } from '@/helpers';
import useTranslation from '@/hooks/useTranslation';
import Link from 'next/dist/client/link';

interface WidgetProps {}

const Widget: React.FC<WidgetProps> = () => {
    const [Weather, setWeather] = useState<null | Wheather>(null);
    const [error, setError] = useState<boolean>(false);
    const [date, setDate] = useState<null | string>(null);
    const { t } = useTranslation('common');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getWeatherFetch({ lat: 43.5992, lon: 39.7257, lang: 'ru_RU' });
            if (data) {
                console.log(Weather);
                if (data.data?.now_dt) {
                    const event = new Date(data.data?.now_dt);
                    setDate(dataFormat(event));
                }
                setWeather(data.data);
            }
        };

        fetchData().catch(() => {
            console.error();
            setError(true); // "Uh-oh!"
        });
    }, []); /* При Weather'e постоянно идут запросы из юзэффекта, 
    при weather == null шёл второй запрос для обновления даты после получения данных, 
    поправил setWeather после присовоения даты */

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
                                    <Link href={Weather?.info?.url ?? ''} passHref>
                                        <MyLink target="_blank">{Weather?.geo_object?.locality?.name}</MyLink>
                                    </Link>
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
                                        <PercentIcon />
                                    </Number>
                                </>
                            ) : (
                                <Skeleton />
                            )}
                        </Row>
                        <Row2>
                            <RregularText>
                                {(Weather != null && t(`wheather.${Weather?.fact?.condition}`, { returnObjects: true })) || <Skeleton />}
                            </RregularText>
                            {Weather?.fact?.feels_like ? (
                                <RregularText>
                                    {t('wheather.feels_like', { returnObjects: true })}
                                    <Condition>
                                        {Weather?.fact?.feels_like}
                                        <PercentIcon />
                                    </Condition>
                                </RregularText>
                            ) : (
                                <Skeleton />
                            )}
                        </Row2>
                    </Middle>
                    <Bottom>
                        {Weather?.forecasts && Weather?.forecasts[0]?.parts ? (
                            <>
                                <Element>
                                    <Text>{t(`Вечером`, { returnObjects: true })}</Text>
                                    {SvgElements['cloud']}
                                    <Numbers>
                                        {Weather?.forecasts[0]?.parts?.evening?.temp_avg != undefined ? (
                                            <>
                                                +{Weather?.forecasts[0]?.parts?.evening?.temp_avg}
                                                <PercentIcon />
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
                                                <PercentIcon />
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
                                                <PercentIcon />
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
