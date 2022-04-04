import { GetStaticProps } from 'next';
import React from 'react';
import { Layout } from '@/components';
import Only from '@/icons/only.svg';

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
