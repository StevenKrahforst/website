import './style.scss';

import socials from '../../socials.json';

const Footer: React.FunctionComponent = (): React.ReactElement => (
  <div className="footer">
    <div>
      <p>&copy; {new Date().getFullYear()} Steven Krahforst</p>
    </div>
    <div>
      <a href={socials.find(social => social.id == 'discord')?.link} target="_blank" rel="noreferrer"><img src="https://api.status.gg/discord/196699773644963840" style={{ height: '80px' }} /></a>
    </div>
  </div>
);

export default Footer;