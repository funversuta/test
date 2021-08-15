import { GetStaticProps } from 'next'
import React from "react"
import Layout from '../components/Layout/Layout'

interface IndexProps {
    /* Page props*/
}

const Index: React.FC<IndexProps> = () => {
    return (
        <Layout>
            {/* Page body */}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {

    return {
        props: {
            /* Page props */
        },
        revalidate: 1
    }
}

export default Index
