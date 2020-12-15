import React, { useCallback, useState } from 'react';

import { useSidebar } from '../../hooks/sidebar';

import DarkLogo from '../../assets/images/yt-logo.svg';
import LightLogo from '../../assets/images/yt-logo-light.svg';
import Avatar from '../../assets/images/avatar.svg';
import PlaySquare from '../../assets/images/play-square.svg';
import Radio from '../../assets/images/radio.svg';
import YtTV from '../../assets/images/yt-tv.svg';
import YtMusic from '../../assets/images/yt-music.svg';
import YtLogo from '../../assets/images/yt-logo-2.svg';
import ChannelPic from '../../assets/images/channel.svg';
import Thumb from '../../assets/images/video.jpg';

import {
  Container,
  LogoArea,
  MenuIcon,
  SearchArea,
  ArrowLeftIcon,
  SearchButton,
  SearchIcon,
  Buttons,
  CreateVideoContainer,
  AppsContainer,
  NotificationsContainer,
  SettingsIcon,
  VideoIcon,
  GridIcon,
  BellIcon,
  Profile,
} from './styles';

import ModalLinks from '../ModalLinks';
import NotificationLink from '../NotificationLink';

interface Props {
  toggleTheme: () => void;
  theme: string;
}

const VideoModal: React.FC = () => {
  return (
    <CreateVideoContainer className="modal">
      <ModalLinks
        path="#"
        icon={PlaySquare}
        alt="YouTube Square"
        label="Enviar vídeo"
      />

      <ModalLinks
        path="#"
        icon={Radio}
        alt="Radio"
        label="Transmitir ao vivo"
      />
    </CreateVideoContainer>
  );
};

const AppsModal: React.FC = () => {
  return (
    <AppsContainer className="modal">
      <ModalLinks path="#" icon={YtTV} alt="YouTube TV" label="YouTube TV" />

      <div>
        <ModalLinks
          path="#"
          icon={YtMusic}
          alt="YouTube Music"
          label="YouTube Music"
        />

        <ModalLinks
          path="#"
          icon={YtLogo}
          alt="YouTube Kids"
          label="YouTube Kids"
        />
      </div>

      <ModalLinks
        path="#"
        icon={YtLogo}
        alt="YouTube"
        label="Escola de Criadores de Conteúdo"
      />

      <ModalLinks
        path="#"
        icon={YtLogo}
        alt="YouTube"
        label="YouTube para Artistas"
      />
    </AppsContainer>
  );
};

const NotificationsModal: React.FC = () => {
  return (
    <NotificationsContainer className="modal">
      <header>
        <h2>Notificações</h2>

        <button type="button">
          <SettingsIcon />
        </button>
      </header>

      <NotificationLink
        path="#"
        channel_photo={ChannelPic}
        title="YouTube Clone using ReactJS"
        date="Há 1 hora"
        thumb={Thumb}
      />

      <NotificationLink
        path="#"
        channel_photo={ChannelPic}
        title="YouTube Clone using ReactJS"
        date="Há 1 hora"
        thumb={Thumb}
      />

      <NotificationLink
        path="#"
        channel_photo={ChannelPic}
        title="YouTube Clone using ReactJS"
        date="Há 1 hora"
        thumb={Thumb}
      />

      <NotificationLink
        path="#"
        channel_photo={ChannelPic}
        title="YouTube Clone using ReactJS"
        date="Há 1 hora"
        thumb={Thumb}
      />
    </NotificationsContainer>
  );
};

const Header: React.FC<Props> = ({ toggleTheme, theme }) => {
  const [inputClicked, setInputClicked] = useState(false);
  const [isShowingVideoOptions, setIsShowingVideoOptions] = useState(false);
  const [isShowingApps, setIsShowingApps] = useState(false);
  const [isShowingNotifications, setIsShowingNotifications] = useState(false);

  const { handleSidebar } = useSidebar();

  const handleOpenSearchInput = useCallback(() => {
    setInputClicked(prevState => !prevState);
  }, []);

  const handleVideoOptions = useCallback(() => {
    setIsShowingVideoOptions(prevState => !prevState);
  }, []);

  const handleApps = useCallback(() => {
    setIsShowingApps(prevState => !prevState);
  }, []);

  const handleNotifications = useCallback(() => {
    setIsShowingNotifications(prevState => !prevState);
  }, []);

  return (
    <Container>
      {!inputClicked && (
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
      )}

      <SearchArea isActive={inputClicked}>
        <button
          type="button"
          className="go-back"
          onClick={handleOpenSearchInput}
        >
          <ArrowLeftIcon />
        </button>

        <input type="text" placeholder="Pesquisar" />

        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchArea>

      {!inputClicked && (
        <Buttons>
          <button
            type="button"
            className="search"
            onClick={handleOpenSearchInput}
          >
            <SearchIcon />
          </button>

          <div>
            <button type="button" onClick={handleVideoOptions}>
              <VideoIcon />
            </button>

            {isShowingVideoOptions && <VideoModal />}
          </div>

          <div>
            <button type="button" onClick={handleApps}>
              <GridIcon />
            </button>

            {isShowingApps && <AppsModal />}
          </div>

          <div className="notifications">
            <button type="button" onClick={handleNotifications}>
              <BellIcon />
            </button>

            {isShowingNotifications && <NotificationsModal />}
          </div>

          <Profile>
            <button type="button">
              <img src={Avatar} alt="Profile Pic" />
            </button>
          </Profile>
        </Buttons>
      )}
    </Container>
  );
};

export default Header;
