import styled from 'styled-components';

import { FiMoreVertical } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 16px;

  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 16px;
  }

  @media (min-width: 580px) {
    flex-direction: row;
    margin: unset;
    max-height: 140px;
  }
`;

export const Thumb = styled.img`
  width: 100%;

  @media (min-width: 580px) {
    max-width: 246px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;

  color: var(--text);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      font-size: 1.4rem;
      color: var(--title);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (min-width: 580px) {
    justify-content: space-between;
    padding: 10px 0 10px 14px;
  }
`;

export const OptionsIcon = styled(FiMoreVertical)`
  width: 20px;
  height: 20px;
  color: var(--icon);
  transition: 0.2s color;

  &:hover {
    color: var(--white);
  }
`;

export const Info = styled.div`
  > a {
    font-size: 1.3rem;
    color: var(--text);
    transition: color 0.2s ease;

    &:hover {
      color: var(--white);
    }
  }

  > span {
    font-size: 1.4rem;
  }

  @media (min-width: 580px) {
    flex: 1;
  }
`;

export const Footer = styled.div`
  span {
    font-size: 1.4rem;
  }
`;
