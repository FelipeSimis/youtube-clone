import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import {
  VideoNotification,
  ChannelPhoto,
  Info,
  VideoThumbnail,
} from './styles';

interface Props {
  path: string;
  channel_photo: string;
  title: string;
  date: string;
  thumb: string;
}

const NotificationLink: React.FC<Props> = ({
  path,
  channel_photo,
  title,
  date,
  thumb,
}) => {
  return (
    <Link to={path}>
      <VideoNotification>
        <div>
          <ChannelPhoto src={channel_photo} alt="Channel Pic" />
        </div>

        <Info>
          <h2 className="title">{title}</h2>

          <span className="date">{date}</span>
        </Info>

        <VideoThumbnail>
          <img src={thumb} alt="Thumbnail" />
        </VideoThumbnail>
      </VideoNotification>
    </Link>
  );
};

export default memo(NotificationLink);
