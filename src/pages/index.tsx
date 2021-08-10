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

export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {},
        revalidate: 1
    }
}

export default Index
