import classNames from 'classnames';

import './style.scss';

const Button: React.FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props): React.ReactElement => (
  <button {...props} className={classNames('button', props.className)} />
);

export default Button;