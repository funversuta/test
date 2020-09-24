import { GetStaticProps } from 'next'
// import {useEffect, useState} from "react"
import {Base} from '../../interfaces'
import {
    getMenu,
    getLanguages,
    getFooter,
    getIndexMeta
} from '../../lib/api'
import Layout from '../layout/Layout'

interface IndexProps extends Base {}

const Index = ({
    languages,
    meta,
    footer
}: IndexProps) => {

    return (
        <Layout
            languages={languages}
            meta={meta}
            footer={footer}>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const menu = await getMenu()
    const languages = await getLanguages()
    const meta = await getIndexMeta()
    const footer = await getFooter()

    return {
        props: {
            menu,
            languages,
            footer,
            meta
        },
        // revalidate: 1
    }
}

export default Index
