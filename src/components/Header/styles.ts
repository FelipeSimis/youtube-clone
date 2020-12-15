import styled, { css, keyframes } from 'styled-components';

import { FiMenu, FiSettings } from 'react-icons/fi';
import { AiOutlineSearch, AiOutlineArrowLeft } from 'react-icons/ai';
import { MdVideoCall } from 'react-icons/md';
import { BsFillGrid3X3GapFill, BsBellFill } from 'react-icons/bs';

interface SearchAreaProps {
  isActive: boolean;
}

export const Container = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 56px;
  padding: 0 14px;

  background: var(--header);
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;

  + button {
    padding: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > button {
    margin-left: 18px;
    display: flex;
    align-items: center;

    > img {
      width: 80px;
      height: 24px;
    }
  }
`;

const iconCSS = css`
  width: 24px;
  height: 20px;
  fill: var(--white);
`;

export const MenuIcon = styled(FiMenu)`
  ${iconCSS}
  color: var(--white);
`;

const input = keyframes`
  from {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

export const SearchArea = styled.form<SearchAreaProps>`
  display: none;
  align-items: center;

  width: 100%;
  max-width: 640px;
  margin: 0 15px;

  ${props =>
    props.isActive &&
    css`
      display: flex;
      margin: unset;
      animation: ${input} 0.4s ease-in-out;
    `}

  > .go-back {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 16px;

    @media (min-width: 580px) {
      display: none;
    }
  }

  > input {
    flex: 1;
    height: 30px;

    padding: 3px 8px;
    border: 1px solid var(--border);

    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    outline: 0;

    font-size: 1.4rem;
    color: var(--white);
  }

  @media (min-width: 580px) {
    display: flex;
  }
`;

export const ArrowLeftIcon = styled(AiOutlineArrowLeft)`
  ${iconCSS}
`;

export const SearchButton = styled.button`
  height: 30px;
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background: var(--button);

  border: 1px solid var(--border);

  > svg {
    color: var(--focus-button-mid-animation);
  }

  &:hover {
    > svg {
      color: var(--white);
    }
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 24px;
  height: 20px;
  color: var(--white);

  transition: 0.2s color ease;

  @media (min-width: 580px) {
    width: 18px;
    height: 18px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  > div {
    position: relative;

    &.notifications {
      display: none;

      @media (min-width: 580px) {
        display: unset;
      }
    }

    .modal {
      padding: 16px 0 12px;
      background: var(--header);
      opacity: 0.98;

      position: absolute;
      right: 0;

      a {
        display: flex;
        align-items: center;

        padding: 8px 16px;

        font-size: 1.4rem;
        color: var(--white);
        transition: 0.2s background ease-in-out;

        &:hover {
          background: var(--focus-button);
        }
      }

      img {
        width: 24px;
        height: 24px;
      }

      span {
        font-size: 1.4rem;
        width: max-content;
      }

      @media (min-width: 480px) {
        width: max-content;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 6px;
    border-radius: 50%;

    &:focus {
      animation: focus 0.8s ease;
    }

    @keyframes focus {
      0% {
        background: var(--focus-button);
      }

      25% {
        background: var(--focus-button-mid-animation);
      }

      100% {
        background: none;
      }
    }
  }

  @media (min-width: 580px) {
    .search {
      display: none;
    }
  }
`;

export const CreateVideoContainer = styled.div`
  img {
    margin-right: 10px;
  }
`;

export const AppsContainer = styled.div`
  > div {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);

    padding: 8px 0;
    margin: 8px 0;
  }

  img {
    margin-right: 16px;
  }
`;

export const NotificationsContainer = styled.div`
  display: none;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px 16px;
    margin-bottom: 12px;

    border-bottom: 1px solid var(--border);

    > h2 {
      font-size: 1.6rem;
      color: var(--white);
    }
  }

  @media (min-width: 580px) {
    display: unset;
  }
`;

export const SettingsIcon = styled(FiSettings)`
  width: 24px;
  height: 24px;
  color: var(--icon);
`;

export const VideoIcon = styled(MdVideoCall)`
  ${iconCSS}
`;

export const GridIcon = styled(BsFillGrid3X3GapFill)`
  ${iconCSS}
`;

export const BellIcon = styled(BsBellFill)`
  ${iconCSS}
`;

export const Profile = styled.div`
  padding-left: 12px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    > img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
`;
