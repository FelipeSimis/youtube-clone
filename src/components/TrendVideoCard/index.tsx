import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Footer,
  InfoWrapper,
  Info,
  OptionsIcon,
  Thumb,
} from './styles';

interface Props {
  thumb: string;
  title: string;
  channelName: string;
  views: number;
  date: string;
  description: string;
}

const TrendVideoCard: React.FC<Props> = ({
  thumb,
  title,
  channelName,
  views,
  date,
  description,
}) => (
  <Container>
    <Thumb src={thumb} />

    <InfoWrapper>
      <div className="header">
        <h2 className="title">{title}</h2>

        <button type="button">
          <OptionsIcon />
        </button>
      </div>

      <Info>
        <Link to="/" className="channel-name">
          {channelName}
        </Link>

        <Footer>
          <span className="views">
            <span>{views}</span> mil visualizações
          </span>{' '}
          •<span className="video-data"> {date}</span>
        </Footer>

        <span>{description}</span>
      </Info>
    </InfoWrapper>
  </Container>
);

export default memo(TrendVideoCard);
