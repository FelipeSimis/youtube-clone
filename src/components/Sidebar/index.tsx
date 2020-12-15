import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSidebar } from '../../hooks/sidebar';

import DarkLogo from '../../assets/images/yt-logo.svg';
import LightLogo from '../../assets/images/yt-logo-light.svg';

import channels from '../../data/Channels';

import OptionLink from '../OptionLink';
import ChannelCard from '../ChannelCard';

import {
  Container,
  LogoArea,
  MenuIcon,
  SectionsContainer,
  Section,
  SubscriptionSection,
  ShowMore,
  ArrowDownIcon,
  ArrowUpIcon,
  Footer,
} from './styles';

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const Sidebar: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [channelList] = useState(channels);
  const [subCount] = useState(channelList.length - 8);

  const [isShowingAllChannels, setIsShowingAllChannels] = useState(false);

  const handleShowAllChannels = useCallback(() => {
    setIsShowingAllChannels(prevState => !prevState);
  }, []);

  const { isSidebarOpen, handleSidebar } = useSidebar();

  return (
    <Container isActive={isSidebarOpen}>
      <LogoArea>
        <button type="button" onClick={handleSidebar}>
          <MenuIcon />
        </button>

        <button type="button" onClick={toggleTheme}>
          {theme === 'dark' ? (
            <img src={DarkLogo} alt="Youtube" />
          ) : (
            <img src={LightLogo} alt="Youtube" />
          )}
        </button>
      </LogoArea>

      <SectionsContainer>
        <Section>
          <OptionLink exact path="/" icon="home" label="Início" />
          <OptionLink path="/trending" icon="fire" label="Em alta" />
          <OptionLink path="/subscriptions" icon="subs" label="Inscrições" />
        </Section>

        <Section>
          <OptionLink path="/library" icon="player" label="Biblioteca" />
          <OptionLink path="/history" icon="history" label="Histórico" />
          <OptionLink
            path="/my_channel"
            icon="playSquare"
            label="Seus vídeos"
          />
          <OptionLink path="/my_movies" icon="localMovie" label="Seus filmes" />
          <OptionLink
            path="/playlist"
            icon="clock"
            label="Assistir mais tarde"
          />
          <OptionLink
            path="/liked_videos"
            icon="like"
            label="Vídeos marcados como gostei"
          />
        </Section>

        <SubscriptionSection
          className={isShowingAllChannels ? 'all-channels' : ''}
        >
          <h2 className="title">Inscrições</h2>

          {channelList.map(channel => {
            return (
              <ChannelCard
                key={channel.id}
                path="/"
                photo={channel.photo}
                name={channel.name}
                hasNotification={channel.hasNotification}
              />
            );
          })}

          <ShowMore onClick={handleShowAllChannels}>
            {!isShowingAllChannels ? (
              <>
                <ArrowDownIcon />
                <span>
                  Mostrar mais <span className="subs-count">{subCount}</span>
                </span>
              </>
            ) : (
              <>
                <ArrowUpIcon />
                <span>Mostrar menos</span>
              </>
            )}
          </ShowMore>
        </SubscriptionSection>

        <Section>
          <h2 className="title">Mais do YouTube</h2>

          <OptionLink path="/premium" icon="youtube" label="Youtube Premium" />
          <OptionLink path="/movie" icon="movie" label="Filmes" />
          <OptionLink path="/gaming" icon="youtubeGaming" label="Jogos" />
          <OptionLink path="/live" icon="radio" label="Ao vivo" />
          <OptionLink path="/learn" icon="bulb" label="Aprender" />
        </Section>

        <Section>
          <OptionLink path="/account" icon="settings" label="Configuração" />
          <OptionLink
            path="/report_history"
            icon="flag"
            label="Histórico de denúncias"
          />
          <OptionLink path="/help" icon="help" label="Ajuda" />
          <OptionLink
            path="/feedback"
            icon="feedback"
            label="Enviar feedback"
          />
        </Section>
      </SectionsContainer>

      <Footer>
        <div>
          <Link to="/">Sobre</Link>

          <Link to="/">Imprensa</Link>

          <Link to="/">Direitos autorais</Link>

          <Link to="/">Entre em contato</Link>

          <Link to="/">Criadores de conteúdo</Link>

          <Link to="/">Publicidade</Link>

          <Link to="/">Desenvolvedores</Link>
        </div>
        <div>
          <Link to="/">Termos</Link>

          <Link to="/">Privacidade</Link>

          <Link to="/">Política e Segurança</Link>

          <Link to="/">Criadores de conteúdo</Link>

          <Link to="/">Como funciona o YouTube</Link>

          <Link to="/">Testar os novos recursos</Link>
        </div>
        © 2020 Google LLC
      </Footer>
    </Container>
  );
};

export default Sidebar;
