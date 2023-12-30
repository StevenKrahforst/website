const withNextIntl = require('next-intl/plugin')();

const fs = require('fs');
const path = require('path');

// Locales
fs.writeFileSync(path.join(__dirname, 'src', 'locales.json'), JSON.stringify(fs.readdirSync(path.join(__dirname, 'src', 'i18n')).map((locale => locale.substring(0, locale.length - 5)))));

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  output: 'export',
  poweredByHeader: false
});

module.exports = nextConfig;