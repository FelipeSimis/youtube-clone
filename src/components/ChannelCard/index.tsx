import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './styles';

interface Props {
  path: string;
  photo: string;
  name: string;
  hasNotification?: boolean;
}

const ChannelCard: React.FC<Props> = ({
  path,
  photo,
  name,
  hasNotification,
}) => {
  return (
    <Link to={path}>
      <Wrapper>
        <img src={photo} alt={name} />

        <span className="channel-name">{name}</span>

        {hasNotification && <span />}
      </Wrapper>
    </Link>
  );
};

export default memo(ChannelCard);
