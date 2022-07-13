import React, { memo } from 'react';
import Link from 'next/link';
import { LinkProps } from 'next/dist/client/link';

interface BaseLink {
    children: React.ReactElement;
}

interface ExternalLink extends BaseLink {
    href: string;
    target?: React.HTMLAttributeAnchorTarget;
    download?: string | boolean;
}

interface NotLink extends BaseLink {}

// TODO: Типы надо доработать
export type LinkConditionalProps = (BaseLink & LinkProps) | ExternalLink | NotLink;

const LinkConditional: React.FC<LinkConditionalProps> = (props) => {
    const propsWithoutChildren = Object.assign({}, props);
    delete (propsWithoutChildren as Partial<LinkConditionalProps>)?.children;

    if ('target' in props || 'download' in props) {
        return React.cloneElement(props.children, { as: 'a', ...propsWithoutChildren });
    }

    if ('href' in props && props.href) {
        return (
            <Link key={props.href.toString()} {...props}>
                {React.cloneElement(props.children, { as: 'a', ...propsWithoutChildren })}
            </Link>
        );
    }

    return React.cloneElement(props.children);
};

export default memo(LinkConditional);
