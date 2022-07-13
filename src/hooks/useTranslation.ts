import { useMemo } from 'react';
import { useTranslation as useNextTranslation } from 'next-i18next';
import { UseTranslationOptions } from 'react-i18next';

export default function useTranslation(namespace: string, options?: UseTranslationOptions<any>) {
    const { t, i18n } = useNextTranslation(namespace, options);
    const T = useMemo(() => t, [i18n]);
    return { t: T, i18n };
}
