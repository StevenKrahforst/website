import './style.scss';

const Footer: React.FunctionComponent = (): React.ReactElement => (
  <div className="footer">
    <div>
      <p>&copy; {new Date().getFullYear()} Steven Krahforst</p>
    </div>
    <div>
      <a href="https://zifera.io/certified-websites/25b63e57-e007-49ba-b408-4d2b223bc211"><img src="https://zifera.io/img/badge.svg" style={{ height: '40px' }} alt="Zifera" /></a>
    </div>
  </div>
);

export default Footer;