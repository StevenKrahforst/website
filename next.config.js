const fs = require('fs');
const path = require('path');

//#region Socials

const socialsPath = path.join(__dirname, 'assets', 'socials.json');
const socials = JSON.parse(fs.readFileSync(socialsPath).toString());
for(let social of socials) {
    const file = path.join(__dirname, 'assets', 'social', `${typeof social.icon_id === 'string' ? social.icon_id : social.id}.svg`);
    if(!fs.existsSync(file))
        continue;
    social.icon = encodeURIComponent(fs.readFileSync(file).toString());
}
fs.writeFileSync(path.join(__dirname, 'src', 'socials.json'), JSON.stringify(socials));

//#endregion

// Locales
fs.writeFileSync(path.join(__dirname, 'src', 'locales.json'), JSON.stringify(fs.readdirSync(path.join(__dirname, 'src', 'i18n')).map((locale => locale.substring(0, locale.length - 5)))));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  poweredByHeader: false
};

module.exports = nextConfig;