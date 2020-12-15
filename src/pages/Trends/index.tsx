import React from 'react';
import { Link } from 'react-router-dom';

import Video from '../../assets/images/video.jpg';
import TrendVideoCard from '../../components/TrendVideoCard';

import {
  Container,
  Wrapper,
  Header,
  IconContainer,
  MusicIcon,
  YoutubeGamingIcon,
  NewspaperIcon,
  MoviesIcon,
  Main,
} from './styles';

const Trends: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Link to="/">
            <IconContainer>
              <MusicIcon />
            </IconContainer>

            <span className="title">Música</span>
          </Link>

          <Link to="/">
            <IconContainer>
              <YoutubeGamingIcon />
            </IconContainer>

            <span className="title">Jogos</span>
          </Link>

          <Link to="/">
            <IconContainer>
              <NewspaperIcon />
            </IconContainer>

            <span className="title">Notícias</span>
          </Link>

          <Link to="/">
            <IconContainer>
              <MoviesIcon />
            </IconContainer>

            <span className="title">Filmes</span>
          </Link>
        </Header>

        <Main>
          <TrendVideoCard
            thumb={Video}
            title="YouTube Clone - ReactJS"
            channelName="Channel Name"
            views={900}
            date="Há 8 horas"
            description="Clonando a interface do YouTube com ReactJS, TypeScript e outras tecnologias"
          />

          <TrendVideoCard
            thumb={Video}
            title="YouTube Clone - ReactJS"
            channelName="Channel Name"
            views={900}
            date="Há 8 horas"
            description="Clonando a interface do YouTube com ReactJS, TypeScript e outras tecnologias"
          />

          <TrendVideoCard
            thumb={Video}
            title="YouTube Clone - ReactJS"
            channelName="Channel Name"
            views={900}
            date="Há 8 horas"
            description="Clonando a interface do YouTube com ReactJS, TypeScript e outras tecnologias"
          />

          <TrendVideoCard
            thumb={Video}
            title="YouTube Clone - ReactJS"
            channelName="Channel Name"
            views={900}
            date="Há 8 horas"
            description="Clonando a interface do YouTube com ReactJS, TypeScript e outras tecnologias"
          />

          <TrendVideoCard
            thumb={Video}
            title="YouTube Clone - ReactJS"
            channelName="Channel Name"
            views={900}
            date="Há 8 horas"
            description="Clonando a interface do YouTube com ReactJS, TypeScript e outras tecnologias"
          />

          <TrendVideoCard
            thumb={Video}
            title="YouTube Clone - ReactJS"
            channelName="Channel Name"
            views={900}
            date="Há 8 horas"
            description="Clonando a interface do YouTube com ReactJS, TypeScript e outras tecnologias"
          />

          <TrendVideoCard
            thumb={Video}
            title="YouTube Clone - ReactJS"
            channelName="Channel Name"
            views={900}
            date="Há 8 horas"
            description="Clonando a interface do YouTube com ReactJS, TypeScript e outras tecnologias"
          />

          <TrendVideoCard
            thumb={Video}
            title="YouTube Clone - ReactJS"
            channelName="Channel Name"
            views={900}
            date="Há 8 horas"
            description="Clonando a interface do YouTube com ReactJS, TypeScript e outras tecnologias"
          />
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Trends;
