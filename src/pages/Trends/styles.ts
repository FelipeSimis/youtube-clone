import styled, { css } from 'styled-components';

import { FaMusic } from 'react-icons/fa';
import { SiYoutubegaming } from 'react-icons/si';
import { ImNewspaper } from 'react-icons/im';
import { MdLocalMovies } from 'react-icons/md';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 1024px) {
    grid-area: page;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 428px;
  height: calc(100% - 56px);

  margin: 0 auto;

  @media (min-width: 580px) {
    max-width: unset;

    padding: 24px;
  }
`;

export const Header = styled.div`
  margin: 12px 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;
  border-bottom: 1px solid var(--border);

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:first-child) {
      margin-left: 15px;
    }

    &:hover {
      > div {
        background: var(--active-button);
      }
    }

    > .title {
      font-size: 1.4rem;
      color: var(--text);

      margin-top: 8px;
    }
  }

  @media (min-width: 580px) {
    justify-content: flex-start;
    padding: 0 16px 16px;
    margin-top: 0;

    > a:not(:first-child) {
      margin-left: 24px;
    }
  }
`;

export const IconContainer = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--trend-header-icon);
  transition: 0.2s background ease;

  @media (min-width: 514px) {
    width: 80px;
    height: 80px;
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
  color: var(--white);

  @media (min-width: 514px) {
    width: 36px;
    height: 36px;
  }
`;

export const MusicIcon = styled(FaMusic)`
  ${iconCSS}
`;

export const YoutubeGamingIcon = styled(SiYoutubegaming)`
  ${iconCSS}
`;

export const NewspaperIcon = styled(ImNewspaper)`
  ${iconCSS}
`;

export const MoviesIcon = styled(MdLocalMovies)`
  ${iconCSS}
`;

export const Main = styled.div`
  padding: 12px 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 580px) {
    align-items: flex-start;
    padding: 12px 16px;
  }
`;
