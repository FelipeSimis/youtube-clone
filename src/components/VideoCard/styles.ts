import styled from 'styled-components';

import { FiMoreVertical } from 'react-icons/fi';

export const Container = styled.div`
  max-width: 320px;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (min-width: 780px) {
    height: 140px;
  }
`;

export const Info = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  margin: 12px 12px 0 0;
`;

export const VideoInfo = styled.div`
  width: 100%;
  margin-top: 12px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--title);
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const OptionsIcon = styled(FiMoreVertical)`
  color: var(--icon);
  transition: 0.2s color;

  &:hover {
    color: var(--white);
  }
`;

export const Footer = styled.footer`
  color: var(--text);

  .channel-name {
    margin: 6px 0;
    font-size: 1.4rem;
    color: inherit;

    display: block;
    width: fit-content;
    transition: 0.2s color ease;

    &:hover {
      color: var(--white);
    }
  }

  .views {
    font-size: 1.4rem;

    > span {
      font-size: inherit;
    }
  }

  .video-data {
    font-size: 1.4rem;
  }
`;
