import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import Layout from '@/components/common/Layout/Layout';
import { BasePageProps } from '@/interfaces';
import CardsSet from '@/components/sections/cardsSet/cardsSet';
import useTranslation from '@/hooks/useTranslation';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SliderWithWidget from '@/components/sections/SliderWithWidget/SliderWithWidget';

interface IndexProps extends BasePageProps {
    /* Page props*/
}

const Index: React.FC<IndexProps & InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    const { t } = useTranslation('cardsSml');
    const { t: t1 } = useTranslation('SliderWithWidget');

    return (
        <Layout meta={props.meta} header={{}} sandwich={{}}>
            <SliderWithWidget content={t1('SliderWithWidget', { returnObjects: true })} toggleTheme={props.toggleTheme} />
            <CardsSet cards={t('cardsSml.items', { returnObjects: true })} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale = 'ru' }) => {
    return {
        props: {
            meta: {
                title: 'Тестовое приложение',
                description: 'description',
                keywords: 'keywords'
            },
            ...(await serverSideTranslations(locale, ['common', 'cardsSml', 'SliderWithWidget']))
        },
        revalidate: 1
    };
};

export default Index;
