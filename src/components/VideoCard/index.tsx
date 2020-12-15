import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Thumb,
  Info,
  Image,
  VideoInfo,
  Header,
  OptionsIcon,
  Footer,
} from './styles';

interface Props {
  thumb: string;
  channel_photo?: string;
  channel_name: string;
  title: string;
  views: number;
  date: string;
}

const VideoCard: React.FC<Props> = ({
  thumb,
  channel_photo,
  channel_name,
  title,
  views,
  date,
}) => {
  return (
    <Container>
      <Thumb src={thumb} />

      <Info>
        {channel_photo && <Image src={channel_photo} />}

        <VideoInfo>
          <Header>
            <h2 className="title">{title}</h2>

            <button type="button">
              <OptionsIcon />
            </button>
          </Header>

          <Footer>
            <Link to="/" className="channel-name">
              {channel_name}
            </Link>
            <span className="views">
              <span>{views}</span> mil visualizações
            </span>{' '}
            •<span className="video-data"> {date}</span>
          </Footer>
        </VideoInfo>
      </Info>
    </Container>
  );
};

export default memo(VideoCard);
