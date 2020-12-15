import styled, { css } from 'styled-components';

import { RiHistoryFill } from 'react-icons/ri';
import { AiFillClockCircle, AiFillLike } from 'react-icons/ai';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 1024px) {
    grid-area: page;

    display: grid;
    grid-template-columns: calc(100% - 178px) 178px;
    grid-template-areas: 'videos profileInfo';
  }
`;

export const VideosArea = styled.div`
  width: 100%;
  height: calc(100% - 56px);

  padding: 0 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .playlist {
    width: 100%;
    max-width: 300px;

    &:not(:first-child) {
      margin-top: 30px;
      border-top: 1px solid var(--border);
    }
  }

  @media (min-width: 500px) {
    display: grid;
    align-items: flex-start;
    justify-content: center;

    .playlist {
      max-width: 430px;
    }
  }

  @media (min-width: 680px) {
    .playlist {
      max-width: unset;
    }
  }

  @media (min-width: 1024px) {
    grid-area: videos;
    justify-content: flex-start;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;

  color: var(--white);

  > div {
    display: flex;
    align-items: center;

    font-weight: 500;

    p {
      margin-left: 12px;
      font-size: 14px;
      color: var(--text);
    }
  }

  > a {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #3ea6ff;
  }
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  color: var(--icon);

  margin-right: 16px;
`;

export const HistoryIcon = styled(RiHistoryFill)`
  ${iconCSS}
`;

export const ClockIcon = styled(AiFillClockCircle)`
  ${iconCSS}
`;

export const LikeIcon = styled(AiFillLike)`
  ${iconCSS}
`;

export const Grid = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 20px 6px;

  &:last-child {
    padding-bottom: 20px;
  }

  > div {
    max-width: 210px;

    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  img {
    height: unset;
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);

    > div {
      &:not(:first-child) {
        margin-top: 0;
      }
    }
  }

  @media (min-width: 680px) {
    grid-template-columns: repeat(3, 1fr);

    > div {
      &:nth-child(1n + 7) {
        display: none;
      }
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const YourChannelInfo = styled.div`
  display: none;
  color: var(--text);

  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 12px;
    }
  }

  @media (min-width: 1024px) {
    grid-area: profileInfo;

    width: 100%;
    height: calc(100% - 56px);

    padding: 70px 24px 24px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Info = styled.div`
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: var(--border);

    padding: 10px 0;

    span {
      font-size: 1.3rem;
    }
  }
`;
