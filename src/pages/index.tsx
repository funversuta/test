import { GetStaticProps } from 'next';
import React from 'react';
import { Layout } from '@/components';
import Only from '@/icons/only.svg';
import ExampleBlock from '../components/Section/ExampleBlock/ExampleBlock';

interface IndexProps {
    /* Page props*/
}

const Index: React.FC<IndexProps> = () => {
    return (
        <Layout>
            <h1 style={{ textAlign: 'center', marginTop: '10rem' }}>
                Hello, World!
                <Only style={{ marginLeft: '1rem', height: '15px', verticalAlign: 'middle' }} />
            </h1>

            <ExampleBlock />

            {/* Page body */}
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    return {
        props: {
            /* Page props */
        },
        revalidate: 1
    };
};

export default Index;
