import React, { useEffect, useState } from 'react';
import { Container, ActualDate, RregularText, Row, Row2, Head, Content, Footer } from './WidgetWeather.styled';
import { getWeatherFetch } from '@/lib/api';
import 'react-loading-skeleton/dist/skeleton.css';
import { Wheather } from '@/interfaces';
import { dataFormat } from '@/helpers';
import useTranslation from '@/hooks/useTranslation';
import Element from '../Element/Element';

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
        <Container isDataLoad={Weather != null} error={error}>
            <Head>
                <Element
                    weatherIcon="vector"
                    description={t(`Погода в`, { returnObjects: true }) + ' '}
                    link={{ text: Weather?.geo_object?.locality?.name, href: Weather?.info?.url }}
                    noNeedTemp
                />
            </Head>
            <ActualDate>{date}</ActualDate>
            <Content>
                <Row>
                    <Element weatherIcon={'rainy'} temp={Weather?.fact?.temp} />
                </Row>
                <Row2>
                    <RregularText>{t(`wheather.${Weather?.fact?.condition}`, { returnObjects: true })}</RregularText>
                    <Element
                        weatherIcon={'none'}
                        text={t('wheather.feels_like', { returnObjects: true })}
                        temp={Weather?.fact?.feels_like}
                    />
                </Row2>
            </Content>
            <Footer>
                <Element text={t(`Вечером`, { returnObjects: true })} temp={Weather?.forecasts[0]?.parts?.evening?.temp_avg} />
                <Element text={t(`Ночью`, { returnObjects: true })} temp={Weather?.forecasts[0]?.parts?.night?.temp_avg} />
                <Element text={t(`Утром`, { returnObjects: true })} temp={Weather?.forecasts[0]?.parts?.morning?.temp_avg} />
            </Footer>
        </Container>
    );
};

export default Widget;
