'use client';

import { useTranslations } from 'next-intl';

import Blob from '@/components/blob';
import Twemoji from '@/components/twemoji';

import socials from '../../socials.json';

import '../../pages/home/style.scss';

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Steven Krahforst » Website',
  description: 'Website of Steven Krahforst'
};

const Home: React.FunctionComponent = (): React.ReactNode => {

  const t = useTranslations('home');

  return (
    <div>
      <div className="main-section">
        <Blob />
        <div className="main-content">
          <h1 className="title">{t('greeting')} <label className="hand"><Twemoji emoji='👋' /></label></h1>
          <div className="social-container">
            { socials.map((social): React.ReactElement => (
              <a className="social-icon" style={{ '--color': social.color } as React.CSSProperties} key={social.id} href={social.link} aria-label={social.name} target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{ __html: decodeURIComponent(social.icon) }} />
            )) }
          </div>
        </div>
      </div>
      <div className="values-section">
        <div className="values-container">
          <div className="value">
            <h1><Twemoji emoji='🔒' /> {t('values.privacy.title')}</h1>
            <p className="value-text">{t('values.privacy.text')}</p>
          </div>
          <div className="value">
            <h1><Twemoji emoji='💰' /> {t('values.adfree.title')}</h1>
            <p className="value-text">{t('values.adfree.text')}</p>
          </div>
          <div className="value">
            <h1><Twemoji emoji='🎨' /> {t('values.modern.title')}</h1>
            <p className="value-text">{t('values.modern.text')}</p>
          </div>
          <div className="value">
            <h1><Twemoji emoji='🔐' /> {t('values.security.title')}</h1>
            <p className="value-text">{t('values.security.text')}</p>
          </div>
          <div className="value">
            <h1><Twemoji emoji='💻' /> {t('values.passion.title')}</h1>
            <p className="value-text">{t('values.passion.text')}</p>
          </div>
          <div className="value">
            <h1><Twemoji emoji='👦' /> {t('values.target.title')}</h1>
            <p className="value-text">{t('values.target.text')}</p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Home;