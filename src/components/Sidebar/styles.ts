import styled, { css } from 'styled-components';

import { FiMenu } from 'react-icons/fi';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.aside<ContainerProps>`
  display: flex;
  flex-direction: column;

  width: 240px;
  height: 100%;

  position: fixed;
  top: 0;
  left: -240px;
  overflow-y: auto;

  background: var(--header);
  transition: 0.4s left ease;

  ${props =>
    props.isActive &&
    css`
      left: 0;
      grid-area: sidebar;
    `};

  &:hover {
    ::-webkit-scrollbar {
      display: unset;
    }
  }

  ::-webkit-scrollbar {
    display: none;

    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar);
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;

  height: 56px;
  padding: 16px 24px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(2) {
      margin-left: 16px;

      display: flex;
      align-items: center;

      > img {
        width: 80px;
        height: 24px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--icon);
`;

export const MenuIcon = styled(FiMenu)`
  ${iconCSS}
`;

export const SectionsContainer = styled.div`
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 12px;

  a {
    display: flex;

    transition: 0.2s background ease-in-out;

    &.active {
      background: var(--active-button-sidebar);

      svg {
        color: var(--active-sidemenu-link);
      }

      &:hover {
        background: var(--hover-active-button-sidebar);
      }
    }

    &:hover {
      background: var(--active-button-sidebar);
    }
  }
`;

export const Section = styled.div`
  border-bottom: 1px solid var(--border);

  &:first-child {
    padding-bottom: 12px;
  }

  &:not(:first-child) {
    padding: 12px 0;
  }

  &:last-child {
    border: 0;
  }

  > .title {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text);
    text-transform: uppercase;

    padding: 8px 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  width: 100%;
  height: 40px;
  padding: 8px 24px;
`;

export const SubscriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-bottom: 1px solid var(--border);

  &.all-channels {
    > a:nth-child(1n + 10) {
      display: unset;
    }
  }

  > .title {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text);
    text-transform: uppercase;

    padding: 16px 24px;
  }

  > a:nth-child(1n + 10) {
    display: none;
  }
`;

export const ShowMore = styled.button`
  display: flex;
  align-items: center;

  padding: 8px 24px;
  transition: 0.2s background ease-in-out;

  &:hover {
    background: var(--active-button);
  }

  > span {
    font-size: 1.3rem;
    color: var(--white);

    margin-left: 24px;

    .subs-count {
      font-size: inherit;
    }
  }
`;

export const ArrowDownIcon = styled(RiArrowDownSLine)`
  ${iconCSS}
`;

export const ArrowUpIcon = styled(RiArrowUpSLine)`
  ${iconCSS}
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 16px 24px;

  font-size: 13px;
  color: var(--text);

  > div {
    display: flex;
    flex-direction: column;

    margin-bottom: 16px;

    > a {
      width: fit-content;

      font-size: 13px;
      color: var(--text);

      padding: 3px 0;
    }
  }
`;
