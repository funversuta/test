export interface Base {
    menu?: {
        title: string,
        slug: string
    }[],
    languages?: {
        code: string,
        text: string
    }[],
    footer?: {
        copyright: string,
        links: {
            title: string,
            href: string
        }[]
    },
    meta?: {
        title: string,
        description?: string,
        keywords?: string
    }
}
