'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import Button from '../button';

import './style.scss';

const CookieConsent: React.FunctionComponent = (): React.ReactNode => {

  const t = useTranslations('cookie');

  const [ accepted, setAccepted ] = useState<boolean>(false);

  useEffect((): void => {
    setAccepted(localStorage.getItem('accepted') === '1');
  }, []);

  return !accepted && (
    <div className="cookie-consent">
      <div className="cookie-consent-content">
        <div className="cookie-consent-info">
          <Image className="cookie-consent-image" src="/cookie.svg" alt="Cookie" width={64} height={64} />
          <h1>{t('text')}</h1>
        </div>
        <div className="cookie-consent-actions">
          <Button className="cookie-consent-button" onClick={(): void => {
            localStorage.setItem('accepted', '1');
            setAccepted(true);
          }}>{t('accept')}</Button>
          <Button className="cookie-consent-button" onClick={(): void => history.back()}>{t('decline')}</Button>
        </div>
      </div>
    </div>
  );

}

export default CookieConsent;