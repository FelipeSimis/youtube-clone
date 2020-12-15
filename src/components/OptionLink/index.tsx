import React, { memo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../../hooks/sidebar';

import {
  BulbIcon,
  ClockIcon,
  FeedbackIcon,
  FireIcon,
  FlagIcon,
  HelpIcon,
  HistoryIcon,
  HomeIcon,
  LikeIcon,
  LocalMovieIcon,
  MoviesIcon,
  PlayerIcon,
  PlaySquareIcon,
  RadioIcon,
  SettingsIcon,
  SubsIcon,
  Wrapper,
  YoutubeGamingIcon,
  YoutubeIcon,
} from './styles';

interface Props {
  exact?: boolean;
  path: string;
  icon:
    | 'home'
    | 'fire'
    | 'subs'
    | 'player'
    | 'history'
    | 'playSquare'
    | 'localMovie'
    | 'clock'
    | 'like'
    | 'youtube'
    | 'movie'
    | 'youtubeGaming'
    | 'radio'
    | 'bulb'
    | 'settings'
    | 'flag'
    | 'help'
    | 'feedback';
  label: string;
}

const icons = {
  home: <HomeIcon />,
  fire: <FireIcon />,
  subs: <SubsIcon />,
  player: <PlayerIcon />,
  history: <HistoryIcon />,
  playSquare: <PlaySquareIcon />,
  localMovie: <LocalMovieIcon />,
  clock: <ClockIcon />,
  like: <LikeIcon />,
  youtube: <YoutubeIcon />,
  movie: <MoviesIcon />,
  youtubeGaming: <YoutubeGamingIcon />,
  radio: <RadioIcon />,
  bulb: <BulbIcon />,
  settings: <SettingsIcon />,
  flag: <FlagIcon />,
  help: <HelpIcon />,
  feedback: <FeedbackIcon />,
};

const OptionLink: React.FC<Props> = ({ path, icon, label }) => {
  const { setIsSidebarOpen } = useSidebar();

  const handleSidebar = useCallback(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, [setIsSidebarOpen]);

  return (
    <NavLink exact to={path} activeClassName="active" onClick={handleSidebar}>
      <Wrapper>
        {icons[icon || 'home']}
        <span className="label">{label}</span>
      </Wrapper>
    </NavLink>
  );
};

export default memo(OptionLink);
