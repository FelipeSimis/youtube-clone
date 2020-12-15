import styled, { css } from 'styled-components';

import {
  AiFillHome,
  AiTwotoneFire,
  AiOutlinePlaySquare,
  AiFillClockCircle,
  AiFillLike,
  AiFillYoutube,
  AiFillFlag,
  AiFillBulb,
} from 'react-icons/ai';
import { FiSettings, FiHelpCircle, FiRadio } from 'react-icons/fi';
import { SiYoutubegaming } from 'react-icons/si';
import { RiHistoryFill } from 'react-icons/ri';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import { MdLocalMovies, MdFeedback } from 'react-icons/md';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  width: 100%;
  height: 40px;
  padding: 8px 24px;

  > .label {
    padding-left: 20px;

    font-size: 1.4rem;
    font-weight: 500;
    color: var(--white);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--icon);
`;

export const HomeIcon = styled(AiFillHome)`
  ${iconCSS}
`;

export const FireIcon = styled(AiTwotoneFire)`
  ${iconCSS}
`;

export const SubsIcon = styled(BsFillCollectionPlayFill)`
  ${iconCSS}
`;

export const PlayerIcon = styled(AiOutlinePlaySquare)`
  ${iconCSS}
`;

export const HistoryIcon = styled(RiHistoryFill)`
  ${iconCSS}
`;

export const PlaySquareIcon = styled(AiOutlinePlaySquare)`
  ${iconCSS}
`;

export const LocalMovieIcon = styled(MdLocalMovies)`
  ${iconCSS}
`;

export const ClockIcon = styled(AiFillClockCircle)`
  ${iconCSS}
`;

export const LikeIcon = styled(AiFillLike)`
  ${iconCSS}
`;

export const YoutubeIcon = styled(AiFillYoutube)`
  ${iconCSS}
`;

export const MoviesIcon = styled(MdLocalMovies)`
  ${iconCSS}
`;

export const YoutubeGamingIcon = styled(SiYoutubegaming)`
  ${iconCSS}
`;

export const RadioIcon = styled(FiRadio)`
  ${iconCSS}
`;

export const BulbIcon = styled(AiFillBulb)`
  ${iconCSS}
`;

export const SettingsIcon = styled(FiSettings)`
  ${iconCSS}
`;

export const FlagIcon = styled(AiFillFlag)`
  ${iconCSS}
`;

export const HelpIcon = styled(FiHelpCircle)`
  ${iconCSS}
`;

export const FeedbackIcon = styled(MdFeedback)`
  ${iconCSS}
`;
