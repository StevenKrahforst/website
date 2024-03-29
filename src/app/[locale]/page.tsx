'use client';

import React from 'react';

import { useTranslations } from 'next-intl';

import Head from 'next/head';

import Blob from '@/components/blob';
import Twemoji from '@/components/twemoji';

import './style.scss';

const Home: React.FunctionComponent<{ params: { locale: string } }> = ({ params: { locale } }): React.ReactNode => {

  const t = useTranslations('home');

  return (
    <div>
      <Head>
        <title>{ t('title') }</title>
        <meta name="description" content={ t('description') } />
      </Head>
      <div className="main-section">
        <Blob />
        <div className="main-content">
          <h1 className="title">{t('greeting')} <label className="hand"><Twemoji emoji='👋' /></label></h1>
          <div className="social-container">
            <a className="discord" href="https://discord.com/users/196699773644963840" aria-label="Discord" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M32.363,36.118L35.188,40c1.938-0.062,9.25-1.5,11.812-6c0-9.59-4.167-20.76-6-22.453C37.211,8.502,31,8,31,8s-0.495,1.103-0.626,2.476"/>
                <path d="M31.5 22A3.5 4 0 1 0 31.5 30 3.5 4 0 1 0 31.5 22zM19.626 10.476C19.495 9.103 19 8 19 8s-6.211.502-10 3.547C7.167 13.24 3 24.41 3 34c2.562 4.5 9.875 5.938 11.812 6l2.825-3.882"/>
                <path d="M10.513 32.759c0 0 4.8 4.241 14.487 4.241s14.487-4.241 14.487-4.241M38.051 13.428C33.14 10.382 27.122 10 25 10s-8.14.382-13.051 3.428M18.5 22A3.5 4 0 1 0 18.5 30 3.5 4 0 1 0 18.5 22z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Home;