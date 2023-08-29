'use client';

import { useEffect, useState } from 'react';

import { useLocale, useTranslations } from 'next-intl';

import Image from 'next/image';

import { useRouter } from 'next/navigation';

import classNames from 'classnames';

import Dropdown, { DropdownItem } from '../dropdown';

import './style.scss';

import locales from '../../locales.json';

const Navbar: React.FunctionComponent = (): React.ReactElement => {

  const t = useTranslations('lang');
  const locale: string = useLocale();

  const { push } = useRouter();

  const [ scroll, setScroll ] = useState<number>(0);

  useEffect((): (() => void) => {

    const scrollListener = (): void => setScroll(window.scrollY);

    window.addEventListener('scroll', scrollListener)

    return (): void => window.removeEventListener('scroll', scrollListener);

  }, []);

  return (
    <div className={classNames('navbar', { 'top': scroll === 0 })}>
      <h1 className="logo"><Image src="/icon.svg" alt="Logo" width={32} height={32} />Krahforst</h1>
      <div className="navbar-links">
        <Dropdown items={Object.assign({}, ...locales.map((locale: string): Record<string, DropdownItem> => ({
          [locale]: {
            icon: `/${locale}.svg`,
            label: t(locale)
          }
        })))} selected={locale} onSelect={(lang: string): void => push(lang)} />
      </div>
    </div>
  );

}

export default Navbar;