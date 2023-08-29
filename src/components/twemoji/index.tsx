import { memo } from 'react';

import twemoji from 'twemoji';

import './style.scss';

export interface TwemojiProps {

  emoji: string;

}

const Twemoji: React.FunctionComponent<TwemojiProps> = ({ emoji }: TwemojiProps): React.ReactElement => (
  <span className="twemoji" dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
      folder: 'svg',
      ext: '.svg'
  })}} />
);

export default memo(Twemoji);